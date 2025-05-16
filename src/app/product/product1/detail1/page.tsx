"use client";

import React, { Suspense, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { useState, useEffect, useRef } from "react";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
interface Product {
  id: string;
  _id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  brand?: string;
  sku?: string;
  stock: number;
  image?: { asset: { url: string } };
  additionalImages?: { asset: { url: string } }[];
  introDescription?: string;
  railOptions?: { label: string; price: number }[];
  accessories?: { label: string; price: number }[];
  mattressOptions?: { label: string; price: number }[];
  featuresList?: string[];
  specifications?: { label: string; value: string }[];
  category?: string;
  sectionHeading?: string;  // Add this line
  quickFeatures?: string[];
  infoIcons?: {
    icon?: { asset: { url: string } };
    label: string;
  }[];
  monthlyPayment?: {
    enabled: boolean;
    minAmount: number;
    provider: string;
  };
  customization?: {
    enabled: boolean;
    buttonText: string;
  };
}

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const allImages = [
    product?.image?.asset?.url,
    ...(product?.additionalImages?.map(img => img.asset?.url) || [])
  ].filter(url => url) as string[];

  const handlePrev = useCallback(() => {
    setSelectedImageIndex(prev => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  }, [allImages.length]);

  const handleNext = useCallback(() => {
    setSelectedImageIndex(prev => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  }, [allImages.length]);

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  const tabs = ["OVERVIEW", "SPECS", "WARRANTY", "PRODUCT DOCS", "REVIEWS (0)"];
  const [quantity, setQuantity] = useState(1);
  
  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
  };

  useEffect(() => {
    if (productId) {
      client
  .fetch(
    `*[_type == 'product' && _id == $id][0] {
      _id,
      title,
      description,
      price,
      originalPrice,
      brand,
      sku,
      stock,
      image { asset -> { url } },
      additionalImages[] { asset -> { url } },
      railOptions,
      mattressOptions,
      featuresList,
      specifications,
      accessories,
      introDescription,
      category,
      quickFeatures,
      sectionHeading,  // Add this line
      infoIcons[] {
        icon { asset -> { url } },
        label
      },
      monthlyPayment,
      customization
    }`,
    { id: productId }
  )
        .then((data) => {
          if (data) {
            setProduct(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [productId]);

  if (!product) {
    return <div className="text-center mt-20">Loading product...</div>;
  }
  if (!productId) {
    return <p>Product not found</p>;
  }

  return (
    <div className="bg-[#FAFAFA]">
      {/* Breadcrumb */}
      <h1 className="text-black leading-tight px-4 md:px-20 text-sm md:text-[35px] font-bold pt-8 md:pt-16">
        Home » Our Products » {product.title}
      </h1>

      {/* Main Product Content */}
      <div className="px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 py-6">
        {/* Image Gallery Section */}
        <div className="w-full md:w-1/2 relative">
          {/* Main Image with Navigation Arrows */}
          <div 
            className="relative bg-white rounded-lg overflow-hidden mb-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {allImages.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md hover:bg-white transition-all"
                  aria-label="Previous image"
                >
                 <MdOutlineKeyboardDoubleArrowLeft className='md:text-[40px] text-gray-700' />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10 shadow-md hover:bg-white transition-all"
                  aria-label="Next image"
                >
                  <MdOutlineKeyboardDoubleArrowRight  className="md:text-[40px] text-gray-700"/>
                </button>
              </>
            )}
            
            <Image
              src={allImages[selectedImageIndex] || "/placeholder-image.jpg"}
              alt={product.title}
              className="object-cover w-full h-auto aspect-square"
              width={600}
              height={600}
              priority
            />
          </div>

          {/* Thumbnail Gallery with Scrollable Container */}
          <div 
            ref={galleryRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          >
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden cursor-pointer transition-opacity ${
                  selectedImageIndex === index ? "opacity-100 ring-2 ring-blue-500" : "opacity-50"
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={img}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                  width={80}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section (unchanged from previous version) */}
        <div className="w-full md:w-1/2 bg-white p-4 md:p-6 rounded-xl">
          {/* Brand and SKU */}
          <div className="text-center mb-3">
            <div className="text-sm md:text-base text-gray-600">
              Brand: <span className="font-medium underline">{product.brand}</span>
            </div>
            <div className="text-sm md:text-base text-gray-500">SKU: {product.sku}</div>
          </div>

          {/* Price */}
          <div className="text-center mb-3">
            <span className="text-2xl md:text-4xl font-medium">
              CA ${product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-lg md:text-2xl text-gray-800 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Monthly Payment */}
          {product.monthlyPayment?.enabled && (
            <div className="text-center text-xs md:text-sm text-gray-600 mb-4">
              Buy in monthly payments with{' '}
              <img
                src="https://res.cloudinary.com/dzngpgki4/image/upload/v1747340636/4575337b-0688-4ee6-820b-e0856a6d623b.png"
                alt={product.monthlyPayment.provider}
                className="inline h-4 align-text-bottom"
              />{' '}
              on orders over ${product.monthlyPayment.minAmount}.
              <a href="#" className="ml-1 font-medium text-blue-600 hover:underline">
                Learn more
              </a>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 text-sm md:text-base mb-4">{product.description}</p>

          {/* Specifications */}
          <ul className="mb-4 text-sm md:text-base space-y-1">
            {product.specifications?.map((spec, index) => (
              <li key={index}>
                <span className="font-light">{spec.label}</span> {spec.value}
              </li>
            ))}
          </ul>

          {/* Category */}
          {product.category && (
            <div className="mb-4">
              <span className="font-light text-sm md:text-base">Category:</span>{' '}
              <a href="#" className="text-blue-600 underline hover:underline">
                {product.category}
              </a>
            </div>
          )}

          {/* Customize Button */}
          {product.customization?.enabled && (
            <div className="text-center mb-4">
              <button className="bg-blue-900 flex md:gap-4 justify-center items-center hover:bg-blue-950 text-white text-sm md:text-base font-light w-full py-2 md:py-3 px-4 md:px-8 rounded-full">
                {product.customization.buttonText}
                <BsArrowUpRight className='text-white' />
              </button>
            </div>
          )}

          {/* Quick Features */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6">
            {product.quickFeatures?.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-950 mt-0.5 mr-1 md:mr-2 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Info Icons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {product.infoIcons?.map((icon, index) => (
              <div key={index} className="flex flex-col items-center w-16 md:w-auto">
                <img
                  src={icon.icon?.asset.url || `/icons/${icon.label.toLowerCase().replace(' ', '-')}.svg`}
                  alt={icon.label}
                  className="h-10 md:h-16 mb-1"
                />
                <span className="text-xs md:text-sm text-gray-600 text-center">{icon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section (unchanged from previous version) */}
      <div className="px-4 md:px-20 mt-6 md:mt-20 mb-10 flex justify-between md:gap-3">
  <div>
          {/* Tab Buttons */}
          <div className="flex space-x-2 border-b">
          {["description", "more-info", "reviews","reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-lg font-medium rounded-t-md border border-b-0 ${
                activeTab === tab
                  ? 'bg-white text-black shadow-inner shadow-blue-950/40 border-blue-900'
                  : 'bg-[#0D2E59] text-white'
              }`}
            >
              {tab === "description"
                ? "Description"
                : tab === "more-info"
                ? "More Information"
                : "Reviews"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
       {/* Tab Content */}
<div className="bg-white p-4 border-2 border-gray-400/50 rounded-bl-2xl rounded-r-2xl md:p-10">
  {activeTab === "description" && (
    <>
      {product.featuresList && product.featuresList.length > 0 ? (
        <div>
          <h2 className="font-semibold text-base md:text-lg mb-3">
            {product.sectionHeading || "Product Features"}
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {product.featuresList.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-500">No product features available.</p>
      )}
    </>
  )}

  {activeTab === "more-info" && (
    <div>
      <h2 className="font-semibold text-base md:text-lg mb-3">
        More Information
      </h2>
      <p className="text-sm md:text-base text-gray-700">{product.introDescription}</p>
    </div>
  )}

  {activeTab === "reviews" && (
    <div>
      <h2 className="font-semibold text-base md:text-lg mb-3">Reviews</h2>
      <p className="text-sm md:text-base text-gray-500">No reviews yet.</p>
    </div>
  )}
</div>

  </div>
   {/* Right Section */}
   {/* Right Section */}
   <div className="w-full md:w-[70vh]">
  <div className="rounded-t-2xl bg-[#0D2E59] text-white text-center py-2 font-semibold">
    CHOOSE OPTIONS & BUY
  </div>
  <div className="border border-t-0 rounded-b-2xl p-4 bg-white space-y-4">
    <div className="flex md:gap-2 items-center">
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
        className="w-12 px-2 py-3 text-center border rounded bg-pink-50"
      />
      <button className="w-full bg-green-600 rounded-full hover:bg-green-400 md:py-3 text-white">
        Add To Cart ↗
      </button>
    </div>
    <p className="text-sm font-normal text-center text-[#0D2E59]">
      (Shipping / Delivery Calculated At Checkout)
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

const ProductPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProductDetails />
  </Suspense>
);

export default ProductPage;