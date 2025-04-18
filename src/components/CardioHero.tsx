'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const percentages = [48, 85, 60, 97];

export default function CardioHero() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prev) =>
        prev.map((val, i) => (val < percentages[i] ? val + 1 : val))
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f6f9fb] py-5 md:py-24 flex justify-end pr-4 md:pl-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full md:p-10 p-4">
          <h1 className="text-lg md:text-5xl font-extrabold text-[#03295a] leading-tight md:mb-4 mb-1">
            How can the burden of cardiovascular diseases be reduced?
          </h1>
          <h3 className="italic md:text-lg text-[12px] text-[#2f4f4f] md:mb-6 mb-3">
            Delivering world class cardiology care
          </h3>

          <div className="flex flex-col md:flex-row gap-6 md:mb-10 mb-3">
            <p className="font-semibold text-[#03295a] md:text-[13px] text-[6px] leading-relaxed md:w-1/2">
              Clarington Home Healthcare is a Canadian company full-service medical equipment supply store committed to providing superior care to all of our customers and their families. We believe that each customer's health is their most valued asset and deserves individual attention and personalized care.
            </p>
            <p className="text-gray-700 leading-relaxed md:text-[13px] text-[8px] md:w-1/2">
              Our services include the sale, rental, installation, and repair of new and used equipment—wheelchairs, scooters, beds, bathroom safety equipment, and more. As an approved provider under the ADP, we also guide you with funding assistance and affordable resources to support your independence.
            </p>
          </div>

          {/* Circular Percentage Loaders */}
          <div className="flex flex-wrap md:gap-6 gap-2">
            {animatedValues.map((val, i) => {
              const radius = 42;
              const circumference = 2 * Math.PI * radius;
              const progress = (val / 100) * circumference;

              return (
                <div key={i} className="md:w-24 md:h-24 w-14 h-14 relative">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="3"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#0d9488"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                      className="transition-all duration-200"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[#03295a] md:text-xl text-sm font-bold">
                    {val}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-[66%] md:px-0 px-4">
          <Image
            src="https://res.cloudinary.com/dzngpgki4/image/upload/v1744831276/WhatsApp_Image_2025-03-28_at_6.26.27_AM_uiozuy.jpg"
            alt="Cardiovascular Model"
            width={600}
            height={400}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
