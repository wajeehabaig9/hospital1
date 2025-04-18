'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Cards from "../../components/Cards"
import HomeSection from "../../components/HomeSection"
import ServiceCard from "../../components/ServiceCard"

import AppointmentCard from "../../components/AppointmentCard"
import CardiacImageSection from "../../components/CardiacImageSection"
import MedicalTabs from '@/components/MedicalTabs';
import CardioHero from '@/components/CardioHero';
import CardiomyopathySection from '@/components/CardioSection';

export const Home = () => {
  const tickAnimation = {
    hidden: { opacity: 0, x: -10, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 1,
        repeatDelay: 3,
      },
    },
  };

  const checklistItems = [
    'Wheelchairs',
    'Hospital Beds',
    'Orthopedic Braces',
  ];

  return (
    <div>
      <div className="relative  md:h-[110vh] h-[700px] w-full ">
        {/* Background Image */}
        <Image
          src="/bg1.png"
          alt="Background"
          fill
          className="object-cover object-left md:object-center w-full h-full"
          priority
        />
        {/* Overlay + Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2E59]/60 to-transparent flex items-center px-6 md:px-28 pt-32 md:pt-40 ">
          <div className="flex flex-col gap-6 text-white w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-xl md:text-6xl font-bold">Your Health</h1>
                <h1 className="text-2xl md:text-8xl font-bold"> Our Mission</h1>
              </div>

              <p className="text-[10px] md:text-xl text-gray-200 max-w-3xl">
              At Clarington Home Healthcare, we offer a wide selection of <strong>medical equipment</strong> and <strong>daily living aids</strong> to support your independence at home. From <strong>wheelchairs</strong> and <strong>walkers</strong> to <strong>hospital beds</strong> and <strong>orthopedic supports</strong>, our products are designed with your comfort and care in mind.


</p>

              {/* Checklist */}
              <div className="space-y-4 md:mt-10 mt-4">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <motion.div
                      variants={tickAnimation}
                      initial="hidden"
                      animate="visible"
                      className="w-6 h-6 rounded-full border-4 border-[#0C2E59] flex items-center justify-center"
                    >
                      <span className="text-white text-xl font-bold">✓</span>
                    </motion.div>
                    <p className="text-sm md:text-xl">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Appointment Card below text */}
            <div className="max-w-3xl">
              <AppointmentCard />
            </div>
          </div>
        </div>
      </div>

      {/* Below Hero Section */}
      <Cards />
      <CardiacImageSection />
      <HomeSection/>
      <MedicalTabs/>
      <ServiceCard/>
      <CardioHero/>
      <CardiomyopathySection/>
    </div>
  );
};
