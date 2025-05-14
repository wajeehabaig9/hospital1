"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { useState, useEffect } from "react";
import { FaHeart, FaChartBar, FaShoppingBag } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
// Define the Product interface
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
  // Other fields...
}

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
const id: string | null = searchParams.get("id"); // Get the 'id' query param
const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState<string>("");
const [quantity, setQuantity] = useState(1);
const [activeTab, setActiveTab] = useState("description");
const increment = () => setQuantity((prev) => prev + 1);
const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));


// Fetch product details when `id` changes
useEffect(() => {
  if (id) {
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
          // Other fields...
        }`,
        { id }
      )
      .then((data) => {
        console.log("Fetched Product Data:", data); // Debugging: Log the fetched data
        if (data) {
          setProduct(data);
          setSelectedImage(data?.image?.asset?.url || "/placeholder-image.jpg");
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }
}, [id]);
  // Handle case where product is not found
  if (!product) {
  return <div className="text-center mt-20">Product's loading.</div>;
  }
  if (!productId) {
    return <p>Product not found</p>;
  }

  // Fetch product data based on productId
  // Your existing logic to fetch and display product details

  return (
    <div>
    <div className="bg-[#FAFAFA]">
<h1 className="text-black font-normal md:px-20 pt-16">Home » Our Products » BUZZAROUND LT 3 WHEEL</h1>

<div className="md:px-20 px-4 flex flex-col md:flex-row items-center md:items-start">

      <div className="w-full max-auto  overflow-hidden relative group  mx-auto">
  {/* Main Selected Image with Magnifier */}
  <div className="relative">
    <Image
      src={selectedImage || "https://via.placeholder.com/300"}
      alt={product.title}
      className="object-cover rounded-lg h-[30vh] md:h-[70vh] w-[30vh] md:w-[80vh] transition-transform duration-300 ease-in-out transform hover:scale-110 mx-auto "
      width={700}
      height={700}
    />
    <div
      className="absolute inset-0 hidden group-hover:block bg-white bg-opacity-100 cursor-zoom-in"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.backgroundImage = `url(${selectedImage || "https://via.placeholder.com/300"})`;
        e.currentTarget.style.backgroundSize = "200%";
        e.currentTarget.style.backgroundPosition = `${x}% ${y}%`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = "none";
      }}
    ></div>
  </div>

  {/* Slider Controls */}
  <button
    className="absolute left-0 top-1/2 bg-opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10 sm:left-4 sm:right-auto"
    onClick={() => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex((product.additionalImages?.length || 0) + 1);
      } else {
        setCurrentImageIndex((prev) => prev - 1);
      }
      const images = [
        product.image?.asset?.url,
        ...(product.additionalImages?.map((img) => img.asset?.url) || []),
      ];
      setSelectedImage(images[currentImageIndex % images.length] || "");
    }}
  >
    &#8592;
  </button>
  <button
    className="absolute right-0 top-1/2 bg-opacity-50 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10 sm:right-4 sm:left-auto"
    onClick={() => {
      const images = [
        product.image?.asset?.url,
        ...(product.additionalImages?.map((img) => img.asset?.url) || []),
      ];
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setSelectedImage(images[currentImageIndex % images.length] || "");
    }}
  >
    &#8594;
  </button>
  <div className=" mt-4 flex overflow-x-scroll sm:overflow-x-hidden">
    {/* First image - Original */}
    <div
      className={`w-[18vh] h-[18vh] sm:w-[20vh] sm:h-[20vh] overflow-hidden cursor-pointer ${
        selectedImage === product.image?.asset?.url ? "" : "grayscale opacity-50"
      }`}
      onClick={() => setSelectedImage(product.image?.asset?.url || "")}
    >
      <Image
        src={product.image?.asset?.url || "https://via.placeholder.com/300"}
        alt={product.title}
        className="object-cover rounded-lg w-full h-full"
        width={700}
        height={700}
      />
    </div>

    <div>
      {/* Additional images */}
    {product.additionalImages?.map((img, index) => (
      <div
        key={index}
        className={`w-[18vh] h-[18vh] sm:w-[20vh] sm:h-[20vh] overflow-hidden cursor-pointer ${
          selectedImage === img.asset?.url ? "" : "grayscale opacity-50"
        }`}
        onClick={() => setSelectedImage(img.asset?.url || "")}
      >
        <Image
          src={img.asset?.url || "https://via.placeholder.com/300"}
          alt={`${product.title} - Additional Image ${index + 1}`}
          className="object-cover rounded-lg w-full h-full"
          width={700}
          height={700}
        />
      </div>
    ))}
    </div>
  </div>
  {/* Additional Images Section */}

</div>

<div>
<div className="md:ml-10 w-full  mt-6 md:mt-0">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="text-sm text-gray-500">
          Brand: <span className="font-medium text-gray-900">Drive DeVilbiss Healthcare</span>
        </div>
        <div className="text-xs text-gray-500">SKU: 700-850</div>
      </div>

      {/* Price */}
      <div className="text-center mb-2">
        <span className="text-3xl font-bold text-black">CA $299</span>
        <span className="ml-2 text-xl text-gray-400 line-through">$425</span>
      </div>

      {/* Affirm note */}
      <div className="text-center text-sm text-gray-600 mb-6">
        Buy in monthly payments with <img src="/affirm-logo.svg" alt="Affirm" className="inline h-4 align-text-bottom" /> on orders over $300.
        <a href="#" className="ml-1 font-medium text-blue-600 hover:underline">Learn more</a>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">
        The <strong>Airgo Transport Chair</strong> by Drive Medical is nearly 50% lighter than conventional wheelchairs (weighing only 28 lbs). It’s sturdy steel construction adds to the reliability of this comfortable transport chair. It includes swing away, removable footrests.
      </p>

      {/* Specifications */}
      <ul className="mb-4 space-y-2">
        <li><span className="font-semibold">Weight Capacity:</span> 300 lbs (136 kg)</li>
        <li><span className="font-semibold">Seat Size:</span> 17" or 19" x 16"</li>
        <li><span className="font-semibold">Weight:</span> 28 lbs (13 kg)</li>
      </ul>

      {/* Category Link */}
      <div className="mb-6">
        <span className="font-semibold">Category:</span>{' '}
        <a href="#" className="text-blue-600 hover:underline">Transport Wheelchairs</a>
      </div>

      {/* Button */}
      <div className="text-center mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg">
          Customize This Product
n        </button>
      </div>

    
            {/* Feature list */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
        <div className="flex items-center">
          <FaCheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-gray-700">Sturdy steel frame</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-gray-700">Lightweight and durable</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-gray-700">Fits into car trunk</span>
        </div>
        <div className="flex items-center">
          <FaCheckCircle className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-gray-700">Includes swing-away footrest</span>
        </div>
      </div>

      {/* Bottom info icons */}
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <img src="/icons/quick-ship.svg" alt="Quick Ship" className="h-8 mb-1" />
          <span className="text-xs text-gray-600">Quick Ship</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/integrity-pricing.svg" alt="Integrity Pricing" className="h-8 mb-1" />
          <span className="text-xs text-gray-600">Integrity Pricing</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/tax-free.svg" alt="Tax Free" className="h-8 mb-1" />
          <span className="text-xs text-gray-600">Tax Free</span>
        </div>
      </div>
    </div>
</div>
</div>
</div>

 <div className="px-4 sm:px-8 lg:px-20 md:mt-20 md:mb-10">
      {/* Tab Buttons */}
      <div className="flex space-x-4">
        {["description", "more-info", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-medium border-b border-gray-400 ${
              activeTab === tab
                ? " text-blue-900 z-30 border-b"
                : " text-gray-600"
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

      {/* Tab Content Container */}
      <div className="bg-white  p-6 sm:p-10 relative z-10">
        {activeTab === "description" && (
          <>
            {product.featuresList && product.featuresList.length > 0 ? (
              <div>
                <h2 className="font-semibold text-lg text-gray-800 mb-4">Product Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
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
            <h2 className="font-semibold text-lg text-gray-800 mb-4">More Information</h2>
            <p className="text-gray-700">
              {/* Replace this with dynamic content or CMS-based data if needed */}
              This product is designed with advanced features to deliver excellent performance and reliability...
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h2 className="font-semibold text-lg text-gray-800 mb-4">Reviews</h2>
    hi
          </div>
        )}
      </div>
    </div>




</div>
  );
};

// Wrap the ProductDetails component in Suspense
const ProductPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProductDetails />
  </Suspense>
);

export default ProductPage;
