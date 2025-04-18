"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { useState, useEffect } from "react";

// Define the Product interface
interface Product {
  id: string;
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image?: { asset: { url: string } };
  additionalImages?: { asset: { url: string } }[];
  specifications?: {
  weightCapacity: string;
  maxSpeed: string;
  range: string;
  turningRadius: string;
  batteries: string;
  charger: string;
  handleBar?: string;
  baseAndTillerWeight?: string;
  batteryType?: string;
  batteriesIncluded?: boolean;
  batteryChargerType?: string;
  largerBatteryOption?: boolean;
  driveType?: string;
  brakingSystem?: string;
  basketIncluded?: boolean;
  headlight?: boolean;
  extendedBase?: boolean;
  weightWithoutBatteries?: string;
  batteryPackWeight?: string;
  seatSectionWeight?: string;
  chargingPortLocation?: string;
  armrestOptions?: string[];
  whyWeLikeIt?: string;
  productDetailsDescription?: string;
  };
  armrestOptions?: string[];
  whyWeLikeIt?: string;
  productDetailsDescription?: string;
  }

const ProductDetails = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
const id: string | null = searchParams.get("id"); // Get the 'id' query param
const [product, setProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [selectedImage, setSelectedImage] = useState<string>("");


// Fetch product details when `id` changes
useEffect(() => {
  if (id) {
  // Fetch product data from Sanity based on the `id`
  client
  .fetch(
  `*[_type == 'product' && _id == $id][0] {
  _id,
  title,
  description,
  price,
  stock,
  image { asset -> { url } },
  additionalImages[] { asset -> { url } },
  armrestOptions,
  specifications {
  weightCapacity,
  armrestOptions, 
 maxSpeed, scooterDisassembles, scooterDriveRange, heaviestPiece, suspension, seatWidth,
deltaTiller, quickShip, weightCapacity, turningRadius, groundClearance, adjustableTiller,
seatDepth,  maxSeatToGroundHeight, lowestSeatToGroundHeight, maxSeatToDeckHeight,
multipleSeatingOptions, heightAdjustableSeat, highBackSeat, armrestOptions, flipBackArmrests,
widthAdjustable, wheelType, frontWheelSize, rearWheelSize, airFilledTires, overallWidth,
overallLength, transportableCollapsible, foldable, batteryType, batteriesIncluded,
batteryChargerType, largerBatteryOption, driveType, oneHandOperation, brakingSystem,
basketIncluded, headlight, extendedBase, weightWithoutBatteries, batteryPackWeight,
seatSectionWeight, baseAndTillerWeight, chargingPortLocation, batteries, charger, range

  }
  }`,
  { id }
  )
  .then((data) => {
  if (data) {
  console.log("Fetched Product Data:", data);
  setProduct(data);
  setSelectedImage(data?.image?.asset?.url || "/placeholder-image.jpg");
  }
  })
  .catch((error) => {
  console.error("Error fetching product:", error);
  // Optionally set a state to show an error message
  });
  }
  }, [id]); // Trigger the effect when `id` changes
  
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
      <div className="w-full md:w-[90vh] max-auto h-[30vh] md:h-[90vh] overflow-hidden relative group  mx-auto">
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

  {/* Additional Images Section */}
  <div className="flex items-center gap-4 mt-4 overflow-x-scroll sm:overflow-x-hidden">
    {/* First image - Original */}
    <div
      className={`w-[18vh] h-[18vh] sm:w-[20vh] sm:h-[20vh] flex justify-center items-center overflow-hidden cursor-pointer ${
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

    {/* Additional images */}
    {product.additionalImages?.map((img, index) => (
      <div
        key={index}
        className={`w-[18vh] h-[18vh] sm:w-[20vh] sm:h-[20vh] flex justify-center items-center overflow-hidden cursor-pointer ${
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




<div className="md:ml-10 w-full md:w-[60%] mt-6 md:mt-0">
<h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">{product.title}</h1>
<div className="md:mt-6 mt-4 mx-auto mb-4 flex justify-center md:justify-start">
<svg
className="w-16 h-6 md:w-22 md:h-7"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 120 30"
preserveAspectRatio="none"
>
<path
d="M0 15 C 10 -5, 30 35, 50 15 C 70 -5, 90 35, 110 15 C 130 -5, 150 35, 170 15"
fill="transparent"
stroke="blue"
strokeWidth="2"
>
<animateTransform
attributeName="transform"
type="translate"
values="0 0; 5 -2; -5 2; 0 0"
dur="2s"
repeatCount="indefinite"
/>
</path>
</svg>
</div>
<p className="text-2xl md:text-3xl text-blue-950 font-semibold mb-4 text-center md:text-left">$1900</p>
<p className="text-gray-800 mb-6 text-lg md:text-xl text-center md:text-left">{product.description}</p>

<div className="text-center md:text-left">
<ul className="list-disc text-gray-800 font-medium text-lg pl-5 inline-block md:block">
<li>Call for availability</li>
<li>Delivery Toronto & GTA</li>
</ul>
</div>

<table className="w-full border border-gray-300 text-xs md:text-sm text-left mt-5">
<thead className="bg-[#CCCCCC]">
<tr>
<th className="border border-gray-800 p-1">Weight Capacity</th>
<th className="border border-gray-800 p-1">Maximum Speed</th>
<th className="border border-gray-800 p-1">Range</th>
<th className="border border-gray-800 p-1">
{product.specifications?.handleBar ? "Handle Bar" : "Turning Radius"}
</th>
<th className="border border-gray-800 p-1">Batteries</th>
<th className="border border-gray-800 p-1">Charger</th>
</tr>
</thead>
<tbody>
<tr>
<td className="border border-gray-300 p-1">{product.specifications?.weightCapacity || "N/A"}</td>
<td className="border border-gray-300 p-1">{product.specifications?.maxSpeed || "N/A"}</td>
<td className="border border-gray-300 p-1">{product.specifications?.range || "N/A"}</td>
<td className="border border-gray-300 p-1">{product.specifications?.turningRadius || product.specifications?.handleBar || "N/A"}</td>
<td className="border border-gray-300 p-1">{product.specifications?.batteries || "N/A"}</td>
<td className="border border-gray-300 p-1">{product.specifications?.charger || "N/A"}</td>
</tr>
</tbody>
</table>

<div className="mt-8 flex items-center justify-center space-x-4 md:space-x-14">
<a
href={`/`}
className="bg-green-600 text-white text-sm px-6 py-2 rounded-full hover:bg-green-800 transition-all duration-300"
>
Add to Cart
</a>
</div>
</div>
</div>

<div className="px-4 sm:px-8 lg:px-20 md:mt-20 md:mb-10">
  {/* First description heading with custom borders */}
  <h2 className="absolute text-xl font-medium text-blue-900 p-3 bg-white border-r border-l border-t border-gray-400 w-[80%] sm:w-[20vh] -mt-[52px] z-30 ">
    Description
  </h2>
  
  {/* Main description section with custom borders */}
  <div className="bg-white border border-gray-400 border-t border-r border-l relative p-6 sm:p-10 z-10">
    <h2 className="text-3xl font-medium">Description</h2>
    <h2 className="text-4xl font-bold mt-4">What Makes It Different</h2>

    <p className="text-gray-500 font-medium mt-4 text-lg">{product.productDetailsDescription}</p>

    <h2 className="text-2xl font-bold mt-4">Why We Like It</h2>
    <p className="text-gray-500 font-medium mt-4 text-lg">{product.whyWeLikeIt}</p>

    {/* List of specifications */}
    <div className="product-specifications">
      <ul className="mt-4 text-gray-500 text-lg font-normal -space-y-1">
        {(
          [
            'maxSpeed', 'scooterDisassembles', 'scooterDriveRange', 'heaviestPiece', 'suspension', 'seatWidth',
            'deltaTiller', 'quickShip', 'weightCapacity', 'turningRadius', 'groundClearance', 'adjustableTiller',
            'seatDepth', 'maxSeatToGroundHeight', 'lowestSeatToGroundHeight', 'maxSeatToDeckHeight',
            'multipleSeatingOptions', 'heightAdjustableSeat', 'highBackSeat' // List up to highBackSeat
          ] as (keyof Product['specifications'])[]
        ).map((spec) => {
          const value = product.specifications?.[spec];
          return (
            <li key={spec} className="flex space-x-10 pb-2">
              <span className="w-1/4">
                {(spec as string)
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .replace(/^./, (str) => str.toUpperCase())}
              </span>
              <span className="w-1/5 text-left">
                {value !== undefined && value !== ""
                  ? Array.isArray(value)
                    ? (value as string[]).join(", ") // Convert array to a comma-separated string
                    : typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value
                  : "N/A"}
              </span>
            </li>
          );
        })}
        
        {/* Add armrestOptions right after highBackSeat */}
        <li key="armrestOptions" className="flex space-x-10 pb-2 text-gray-500 text-lg font-normal items-center">
          <span className="font-medium w-1/4">Armrest Options</span>
          <span className="w-1/5 text-left">
            {product?.armrestOptions?.length ? (
              <div>
                {product.armrestOptions.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </div>
            ) : product?.specifications?.armrestOptions?.length ? (
              <div>
                {product.specifications.armrestOptions.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </div>
            ) : (
              "N/A"
            )}
          </span>
        </li>

        {/* Continue rendering the rest of the specifications */}
        {(
          [
            'flipBackArmrests', 'widthAdjustable', 'wheelType', 'frontWheelSize', 'rearWheelSize', 'airFilledTires', 
            'overallWidth', 'overallLength', 'transportableCollapsible', 'foldable', 'batteryType', 'batteriesIncluded',
            'batteryChargerType', 'largerBatteryOption', 'driveType', 'oneHandOperation', 'brakingSystem',
            'basketIncluded', 'headlight', 'extendedBase', 'weightWithoutBatteries', 'batteryPackWeight',
            'seatSectionWeight', 'baseAndTillerWeight', 'chargingPortLocation', 'batteries', 'charger', 'range'
          ] as (keyof Product['specifications'])[]
        ).map((spec) => {
          const value = product.specifications?.[spec];
          return (
            <li key={spec} className="flex space-x-10 pb-2">
              <span className="font-medium w-1/4">
                {(spec as string)
                  .replace(/([A-Z])/g, " $1")
                  .trim()
                  .replace(/^./, (str) => str.toUpperCase())}
              </span>
              <span className="w-1/5 text-left">
                {value !== undefined && value !== ""
                  ? Array.isArray(value)
                    ? (value as string[]).join(", ") // Convert array to a comma-separated string
                    : typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value
                  : "N/A"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
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
