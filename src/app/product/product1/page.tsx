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

      <div className="flex space-x-2 justify-end md:px-20 md:mt-10 items-center">
        <div className="text-[14px] font-normal p-1 text-white bg-[#48A2D5]    w-[40px] h-[40px] text-center">1</div>
        <div className="text-[14px] font-normal p-1 border-gray-300 border-[1px] w-[40px] h-[40px] text-center">2</div>
        <div className="text-[14px] font-normal p-1 border-gray-300 border-[1px] w-[40px] h-[40px] text-center">3</div>
        <div className="text-[14px] font-normal p-1 border-gray-300 border-[1px] w-[40px] h-[40px] text-center">4</div>
        <div className="text-[14px] font-normal p-1 border-gray-300 border-[1px] w-[40px] h-[40px] text-center">5</div>

        <div className="flex space-x-2">

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
      {/* Product Details Section */}
      <div className="md:px-20 md:mt-20">
  <div className="w-full flex items-center my-6 sm:my-8">
    <div className="border-t border-gray-400 flex-1"></div>
    <span className="px-4 text-blue-900 font-semibold text-3xl whitespace-nowrap">
      All Mobility Scooters Products
    </span>
    <div className="border-t border-gray-400 flex-1"></div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product, index) => (
    <div key={index} className="relative">
      <Link href={`/product/product1/detail${index + 1}?id=${product._id}`}>
        <div className="bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col h-full relative">

          {/* Heart Icon */}


          {/* Product Image */}
          <div className="relative w-full h-44 flex items-center justify-center bg-white group overflow-hidden">
  <Image
    src={
      typeof product.image === "string"
        ? product.image
        : product.image?.asset.url || "https://via.placeholder.com/300"
    }
    alt={product.title}
    width={160}
    height={160}
    className="object-contain z-10 transition-transform duration-300 group-hover:scale-105"
  />
  {/* Black Hover Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
</div>


          {/* Product Title */}
          <h2 className="text-[18px] font-medium mt-4 line-clamp-2">{product.title}</h2>
          <div className="absolute bottom-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5a4.504 4.504 0 00-3.75 2.018A4.504 4.504 0 009 3.75c-2.486 0-4.5 2.015-4.5 4.5 0 6 9 10.5 9 10.5s9-4.5 9-10.5z"
              />
            </svg>
          </div>
          {/* Star Rating */}
          <div className="flex items-center -space-x-[4px] mt-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-gray-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.1 3.385a1 1 0 00.95.69h3.564c.969 0 1.371 1.24.588 1.81l-2.885 2.095a1 1 0 00-.364 1.118l1.1 3.386c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.885 2.095c-.785.57-1.84-.197-1.54-1.118l1.1-3.386a1 1 0 00-.364-1.118L3.426 8.812c-.783-.57-.38-1.81.588-1.81h3.564a1 1 0 00.95-.69l1.1-3.385z" />
              </svg>
            ))}
          </div>

          {/* Price */}
          <p className="text-blue-900 font-bold mt-2 text-[20px]">
            ${product?.price ? product.price.toFixed(2) : "0.00"}
          </p>
        </div>
      </Link>
    </div>
  ))}
</div>


</div>




      <div className="w-full px-4 md:px-20  py-8 flex flex-col items-center text-center bg-white shadow-md rounded-lg md:mt-10 mt-1">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Looking for a Scooter Temporarily?
        </h2>
        <p className="text-lg font-medium text-gray-600 mb-6">
          We offer short-term and long-term rentals at an affordable price.
        </p>
        <Link className="bg-blue-950 text-white text-md font-medium mt-5 px-6 py-3 rounded-md hover:bg-blue-900 transition-all" href="https://mednation.ca/mobility-scooter-rentals/">
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
