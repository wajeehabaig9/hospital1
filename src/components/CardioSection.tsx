'use client';
import { useEffect, useState } from 'react';

export default function CardiacImagingSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = 270 - offsetY * 0.05;

  return (
    <section
      className="relative w-full md:h-[600px] h-[400px] overflow-hidden bg-no-repeat bg-cover md:mb-20"
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/dzngpgki4/image/upload/v1744831663/WhatsApp_Image_2025-03-28_at_6.21.18_AM_wx0nzy.jpg)',
        backgroundPosition: `center ${parallaxOffset}%`,
      }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right, #002D5D 0%, #001B44 30%, transparent 100%)`,
          opacity: 0.85,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl md:mt-20 mt-10 text-white md:space-y-6 space-y-2 md:pl-28 pl-10">
        <p className="text-blue-500 md:text-md font-semibold">
          About Clarington Home Healthcare
        </p>
        <h1 className="md:text-6xl text-2xl font-extrabold tracking-tight text-white">
          Providing Personalized Medical Equipment Solutions
        </h1>
        <p className="md:text-2xl text-[13px] italic font-medium text-[#d6e4e8]">
          We are a full-service medical equipment supply store committed to superior care and personalized support.
        </p>

        <div className="flex flex-col md:flex-row md:gap-6 gap-2">
          <div>
            <p className="font-bold text-white mb-2 uppercase md:text-[13px] text-[8px]">What We Understand:</p>
            <ul className="space-y-1 text-white">
              <li className="flex items-center gap-2 md:text-[13px] text-[8px]">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Living with medical conditions is challenging
              </li>
              <li className="flex items-center gap-2 md:text-[13px] text-[8px]">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Specialty product shopping can be frustrating
              </li>
              <li className="flex items-center gap-2 md:text-[13px] text-[8px]">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Individual care and support are essential
              </li>
            </ul>
          </div>

          <p className="max-w-sm text-white md:text-[13px] text-[8px]">
            Our trained and experienced team helps you find the right solution to manage your condition and regain independence. We also collaborate with government programs like ADP for funding guidance and provide services including sales, rentals, installation, and repairs for mobility aids and home medical equipment.
          </p>
        </div>

        <button className="md:mt-10 mt-5 mb-10 md:mb-0 md:px-6 px-4 md:py-4 py-2 border md:text-[13px] text-[8px] border-white text-white hover:bg-[#39bca7] hover:text-white font-semibold transition">
          Contact Us for More Info
        </button>
      </div>
    </section>
  );
}
