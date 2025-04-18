"use client";
import { Check } from "lucide-react";
import CardsSection from '@/components/product/CardsSection';
import { useState, useEffect } from 'react';
import Affirm from "../../../../public/Affirm_Logo.png";
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { motion } from "framer-motion";

interface Product {
  id: string; 
  _id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image?: { asset: { url: string } };
  specifications?: {
    weightCapacity: string;
    maxSpeed: string;
    range: string;
    turningRadius: string;
    handleBar?: string; // Added handleBar property
    batteries: string;
    charger: string;
  };
  slug?: string; // Added slug property
}

// Fetch multiple products
const fetchProducts = async () => {
  const query = `*[_type == "product"] | order(_createdAt asc)[2..8] {
    _id,
    title,
    description,
    price,
    stock,
    "image": image.asset->url,
    specifications {
      weightCapacity,
      maxSpeed,
      range,
      turningRadius,
      batteries,
      charger
    }
  }`;

  const data = await client.fetch(query);
  return data;
};

const faqs = [
  {
    question: "Who is eligible for a mobility scooter?",
    answer:
      "Mobility scooters are intended for individuals with mobility limitations, such as difficulty walking or standing because of an injury, physical disability, or medical condition, who need assistance to complete daily tasks.",
  },
  {
    question: "What is the price range of mobility scooters?",
    answer:
      "The cost of a mobility scooter varies widely, and depends on the type and size of scooter, brand, features, accessories, and battery life. It’s important to consider your individual needs when choosing a mobility scooter.",
  },
  {
    question: "Where can I buy a mobility scooter?",
    answer:
      "We have mobility scooters available for sale and rental in Oakville, Ontario. Contact our healthcare store for a free consultation to find a scooter that fits your needs and budget.",
  },
];
const Product1Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      const query = `*[_type == "product"] | order(_createdAt desc)[0] {
        _id, title, description, price, stock, 
        image { asset -> { url } }, 
        specifications { weightCapacity, maxSpeed, range, turningRadius, batteries, charger }
      }`;

      const data: Product = await client.fetch(query);
      setProduct(data);
    }

    fetchProduct();
  }, []);

  if (!product) return <p className="text-center text-lg font-semibold mt-10">Loading product...</p>;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-left-top h-[30vh] md:h-[55vh]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(12, 40, 90, 1) 50%, rgba(12, 41, 90, 0.1) 100%, rgba(115, 192, 47, 0)), url('https://res.cloudinary.com/dzngpgki4/image/upload/v1743198628/Screenshot_2025-03-29_at_2.50.42_AM_hteuv7.png')",
          backgroundSize: "auto 130%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="max-w-screen-xl mx-auto md:px-4 flex flex-wrap items-stretch">
          <div className="w-full md:w-2/3 px-12 py-3">
            <h1 className="text-4xl sm:text-4xl md:text-5xl text-white font-semibold  mt-10 md:mt-28">Mobility Scooters</h1>
            <h2 className="text-lg sm:text-lg md:text-xl text-white mt-2">We offer Mobility scooters for Sale and Rental.</h2>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <CardsSection />
 
      {/* Product Details Section */}
      <div className="md:px-20 md:mt-40">
      <div className="w-full  flex items-center my-6 sm:my-8 ">
          <div className="border-t border-gray-400 flex-1"></div>
          <span className="px-4 text-blue-900 font-semibold text-3xl whitespace-nowrap">

          All Mobility Scooters Products

          </span>
          <div className="border-t border-gray-400 flex-1"></div>
        </div>
        {products.map((product, index) => (
  <div key={index} className="group">
    <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 transition-all duration-300 hover:scale-105">
      {/* Product Image Container */}
      <div className="relative h-[40vh] w-full md:w-[40vh] flex justify-center items-center group">
        <Image 
          src={typeof product.image === 'string' ? product.image : product.image?.asset.url || 'https://via.placeholder.com/300'} 
          alt={product.title} 
          className="object-cover rounded-lg" 
          width={300} 
          height={300} 
        />
        
        {/* Blue Hover Animation */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

       {/* Add to Cart / Details Button */}
<div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white font-semibold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out w-full flex justify-center text-center">
  <strong className="p-1 border border-white text-[14px]">ADD TO CART</strong> &nbsp;/ DETAILS
</div>

      </div>

      {/* Product Details */}
      <div className="w-full md:w-[140vh] px-4">
        <h3 className="text-2xl font-medium italic text-black mb-4">
          <a href="/" className="hover:underline">{product.title}</a>
        </h3>
        <p className="text-gray-500 mb-4 font-medium ">{product.description}</p>

        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-[100vh] px-5">
          <h1 className="flex items-center gap-2 text-green-600 font-normal text-sm mb-5">
            <Check className="w-5 h-5 text-green-600" /> Call for availability
          </h1>
          <h1 className="flex items-center gap-2 text-green-600 font-normal text-sm">
            <Check className="w-5 h-5 text-green-600" /> Delivery Toronto & GTA
          </h1>
        </div>

        {/* Product Specifications Table */}
        <table className="w-full border border-gray-300 rounded-lg text-sm text-left md:mt-0 mt-4">
          <thead className="bg-[#CCCCCC] rounded-lg" >
            <tr>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">Weight Capacity</th>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">Maximum Speed</th>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">Range (Distance)</th>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">
                {index === 0 ? "Turning Radius" : "Handle Bar"}
              </th>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">Batteries</th>
              <th className="border border-gray-800 p-1 md:text-[14px] text-[10px] text-center">Charger</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.weightCapacity || "N/A"}</td>
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.maxSpeed || "N/A"}</td>
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.range || "N/A"}</td>
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.turningRadius || product.specifications?.handleBar || "Delta Style"}</td>
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.batteries || "N/A"}</td>
              <td className="border border-gray-300 p-1 md:text-[14px] text-[10px] text-center">{product.specifications?.charger || "N/A"}</td>
            </tr>
          </tbody>
        </table>

        {/* Product Price and View Button */}
        <div className="mt-4 flex items-center justify-end space-x-14">
          <span className="text-xl font-medium text-blue-900">
            ${product?.price ? product.price.toFixed(2) : "0.00"}
          </span>
          <Link 
  href={`/product/product1/detail${index + 1}?id=${product._id}`} 
  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-800 transition-all duration-300"
>
  View Product
</Link>



        </div>
      </div>
    </div>

    {/* Financing Section */}
    <div className="flex items-center justify-start space-x-1 mt-14 md:pl-0 pl-10">
      <h1 className="text-lg"> 
        Starting at ${((product?.price || 88) / 12).toFixed(2)}/mo with 
      </h1>

      <Image
        src={Affirm}
        alt="Financing options"
        width={50}
        height={50}
        className="-mt-1"
      />
      <h1 className="text-lg">Learn more</h1>
    </div>

    <div className="h-[1px] w-full bg-gray-200 mb-5 mt-5"></div>
  </div>
))}

</div>


<div className="flex space-x-2 justify-end md:px-20 items-center">
  <div className="text-[10px] font-normal p-1 text-white bg-[#48A2D5] w-[25px] h-[25px] text-center">1</div>
  <div className="text-[10px] font-normal p-1 border-gray-300 border-[1px] w-[25px] h-[25px] text-center">2</div>
 <div className="flex space-x-2"> 
  <h1>Next</h1>
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5 text-gray-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg>
 </div>

</div>
<div className="w-full px-4 md:px-20  py-8 flex flex-col items-center text-center bg-white shadow-md rounded-lg md:mt-10 mt-1">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Looking for a Scooter Temporarily?
      </h2>
      <p className="text-lg font-medium text-gray-600 mb-6">
        We offer short-term and long-term rentals at an affordable price.
      </p>
      <Link   className="bg-blue-950 text-white text-md font-medium mt-5 px-6 py-3 rounded-md hover:bg-blue-900 transition-all" href="https://mednation.ca/mobility-scooter-rentals/">
          See Our Rentals
      </Link>
    </div>


    <div className="w-full  mx-auto mt-10 max-w-5xl bg-gray-100 p-6 rounded-md shadow-md border border-gray-300 mb-10">
        <p className="text-lg text-gray-500">
          Mobility scooters are electrically powered vehicles designed to help people with mobility issues move around easily and independently. These vehicles come in a variety of styles. We have mobility scooters available for sale and rental.
        </p>
        <p className="text-lg text-gray-500 mt-4">
          Unlock newfound freedom and reclaim your independence with our top-of-the-line mobility scooters. Engineered for comfort, reliability, and ease of use, our scooters offer a safe and convenient way to navigate your surroundings with confidence. Say goodbye to limitations and embrace a life of increased mobility, enabling you to effortlessly go wherever you desire, whenever you want.
        </p>
      </div>

      <div className="md:px-20 mx-auto p-6 mb-10">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-2 overflow-hidden"
          >
            <button
              className="w-full flex space-x-10 items-center p-4  text-black hover:text-blue-900 transition duration-300"
              onClick={() => toggleFAQ(index)}
            >
                  <span className="text-xl bg-black w-[30px] h-[30px] flex items-center justify-center hover:text-white hover:bg-blue-900 text-white ">
                {openIndex === index ? "−" : "+"}
              </span>
              <span className="font-medium text-xl">{faq.question}</span>
          
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white text-black"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product1Page;
