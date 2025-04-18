"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Adjust path if necessary
import Image from "next/image";
import finance from "../../../public/finance.png";
import finance1 from "../../../public/chair.jpg";

interface Product {
  _id: string;
  title: string;
  description: string;
  image?: { asset: { url: string } };
}

const CardsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const query = `*[_type == "product"] | order(_createdAt asc)[0..1] { 
        _id, title, description, image { asset -> { url } } 
      }`;
      
      
      const data: Product[] = await client.fetch(query);
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 px-4 md:px-10">
      {/* Image Card */}
      <div className=" md:flex hidden w-full md:w-[50vh] mx-auto flex-1  flex flex-col items-center p-6 rounded-lg">
        <img
          src="https://mednation.ca/wp-content/uploads/2023/04/gra-600x600.jpg"
          className="w-[40%] sm:w-[35vh] h-[30vh] object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
          alt="Scooter"
        />

        {/* Finance Section */}
        <div
          className="shadow-2xl bg-[#F2F2F2] flex flex-col items-center justify-center rounded-xl px-4 py-6 
          transition-all duration-500 ease-in-out hover:shadow-3xl hover:scale-105 mt-6 md:mt-8"
        >
          <Image
            decoding="async"
            className="p-1 w-[12vh] h-[12vh] md:w-[20vh] md:h-[20vh] transition-transform duration-500 ease-in-out hover:scale-110"
            src={finance}
            alt="Financing Icon"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-medium transition-colors duration-500 ease-in-out hover:text-gray-700 text-center mt-4">
            FINANCING OPTIONS AVAILABLE
          </h2>
        </div>
      </div>

      {/* Heading Section */}
      <div className="w-full bg-[#FAFAFA] md:w-[130vh] text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium mt-6 md:mt-16">
          Mobility Scooters in Oakville, Toronto, and the GTA
        </h1>

        {/* Divider Section */}
        <div className="w-full md:w-[130vh] flex items-center my-6 sm:my-8 px-4">
          <div className="border-t border-gray-400 flex-1"></div>
          <span className="px-4 text-blue-900 font-semibold text-lg sm:text-xl whitespace-nowrap">
            Choose by Category
          </span>
          <div className="border-t border-gray-400 flex-1"></div>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:space-x-20 p-4 sm:p-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="relative w-[90%] md:mb-0 mb-10  sm:w-[40vh] flex flex-col justify-between rounded-md border-[0.5px] p-4 mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ borderRadius: "4px 4px 50px 4px" }}
              >
                {/* Product Image */}
                <div className="relative group">
                  <Image
                    decoding="async"
                    width={2500}
                    height={1200}
                    src={product.image?.asset.url || finance1}
                    alt={product.title}
                    className="mx-auto rounded-md transition-transform duration-500 ease-in-out h-[25vh] sm:h-[35vh] md:w-full w-[30vh] object-cover"
                  />

                  {/* Hover Gradient Effect */}
           
                </div>

                <div className="h-[8vh] sm:h-[10vh] text-center">
                  <h4 className="text-lg sm:text-2xl font-semibold mt-4 sm:mt-5">
                    <a href="/" className="text-black hover:underline">
                      {product.title}
                    </a>
                  </h4>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 animate-pulse">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
