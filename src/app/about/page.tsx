import React from 'react';
import CardsServices from "../../components/CardsServices";
import CardioHero1 from "../../components/CardioHero1";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-fixed bg-center bg-cover flex items-center justify-center px-4 md:px-8 text-center"
        style={{
          backgroundImage:
            "url('https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_about.jpg')",
          minHeight: '80vh',
          paddingTop: '80px', // Adjust for navbar
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-white text-3xl md:text-7xl font-bold mb-2">
            About Clarington Home Healthcare
          </h1>
          <p className="text-white text-sm md:text-base">
            We are committed to providing compassionate care and personalized services that
            improve the lives of our clients and their families. Learn more about who we are,
            what we believe in, and how we can help.
          </p>
        </div>
      </section>

      {/* Cards Section */}
<div className='bg-[#F3F3F3] md:m-5'>
<div className="mt-16 px-4 md:px-8">
        <CardsServices />
      </div>
</div>
<CardioHero1/>
<section className="bg-[#f4f9fd] py-20 px-4 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Doctor Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="	https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_image_02.jpg"
            alt="Doctor"
            className="rounded-[10px] border-[10px] border-white shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-[#3b566e]">
          <h2 className="text-4xl font-bold mb-6 leading-tight text-[#1e2d3b]">
            We Are World-Leading Cardiologists
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Specializing in the diagnosis, treatment, and monitoring of heart disorders.
          </p>
          <p className="text-lg mb-8 leading-relaxed">
            Our team approach involves the patient as part of our team, enhancing our ability to provide effective health care.
          </p>
          {/* Signature */}
          <div>
            <img
              src="/signature.png"
              alt="Signature"
              className="h-12"
            />
            <p className="mt-2 font-semibold">Dr. Johnathan Smith</p>
            <p className="text-sm text-gray-500">Chief Medical Officer</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
