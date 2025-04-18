'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaHeartbeat,
  FaArrowsAltV,
  FaHeartBroken,
  FaProcedures,
  FaUserInjured,
} from 'react-icons/fa';

const tabs = [
  {
    id: 'arrhythmia',
    title: 'Adjustable Beds for Arrhythmia',
    icon: <FaHeartbeat />,
    description: (
      <>
        <strong>Manage heart rhythm conditions with comfort and support.</strong><br />
        The adjustable hospital bed shown ensures optimal rest for individuals experiencing arrhythmias, helping improve circulation and promote healing.<br /><br />
        At Clarington Home Healthcare, we believe your health is your most valued asset. Our beds are designed to provide personalized comfort during recovery and ongoing care.
      </>
    ),
    symptoms: ['Fluttering chest sensations', 'Fatigue', 'Shortness of breath'],
    image: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1744825086/Leonardo_Phoenix_10_A_fully_adjustable_electric_hospital_bed_w_3_fgzjy4.jpg',
  },
  {
    id: 'atherosclerosis',
    title: 'Modern Power Wheelchairs',
    icon: <FaArrowsAltV />,
    description: (
      <>
        <strong>Support daily mobility while managing restricted blood flow conditions.</strong><br />
        The image showcases a modern power wheelchair—ideal for individuals experiencing reduced mobility due to narrowed arteries.<br /><br />
        Our team guides you through choosing the right wheelchair for independent living. We're here to help you stay active, safe, and supported.
      </>
    ),
    symptoms: ['Chest discomfort', 'Fatigue', 'Leg or arm weakness'],
    image: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1744825086/Leonardo_Phoenix_10_A_sleek_modern_power_wheelchair_placed_in_1_fsqkeo.jpg',
  },
  {
    id: 'cardiomyopathy',
    title: 'Power Mobility for Heart Care',
    icon: <FaHeartBroken />,
    description: (
      <>
        <strong>Reduce strain and stay mobile with tailored solutions.</strong><br />
        Shown here is another variation of a powered wheelchair designed for individuals experiencing heart muscle weakness or fatigue.<br /><br />
        Clarington offers personalized advice to help you find supportive devices, ensuring your comfort while maintaining independence.
      </>
    ),
    symptoms: ['Leg swelling', 'Breathlessness', 'Fatigue'],
    image: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1744825086/Leonardo_Phoenix_10_A_sleek_modern_power_wheelchair_placed_in_2_ttqhbu.jpg',
  },
  {
    id: 'congenital',
    title: 'Compact Beds for Pediatric & Adult Care',
    icon: <FaProcedures />,
    description: (
      <>
        <strong>Specialized care solutions for all ages.</strong><br />
        This image features a compact adjustable hospital bed, suitable for both pediatric and adult patients living with congenital heart defects.<br /><br />
        We work closely with families to provide comfort-focused equipment that supports growth, healing, and better home care experiences.
      </>
    ),
    symptoms: ['Rapid breathing', 'Feeding difficulty (in infants)', 'Poor growth'],
    image: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1744825087/Leonardo_Phoenix_10_A_fully_adjustable_electric_hospital_bed_w_1_d9lj97.jpg',
  },
  {
    id: 'infections',
    title: 'Mobility Scooters for Recovery',
    icon: <FaUserInjured />,
    description: (
      <>
        <strong>Recover confidently with mobility and care tools that support you at home.</strong><br />
        Pictured is a sturdy medical scooter—ideal for patients recovering from infections requiring reduced physical exertion.<br /><br />
        We offer rental and purchase options for scooters and recovery aids. Let our trained team help you navigate care with dignity and ease.
      </>
    ),
    symptoms: ['Fever', 'Chest pain', 'Fatigue'],
    image: 'https://res.cloudinary.com/dzngpgki4/image/upload/v1744830285/WhatsApp_Image_2025-03-28_at_6.21.51_AM_hs7hij.jpg',
  },
];


export default function MedicalTabs() {
  const [activeTab, setActiveTab] = useState('arrhythmia');
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 sm:p-6 md:mt-20">
      {/* Scrollable Tabs on Mobile */}
{/* Tabs */}
<div className="overflow-x-auto sm:overflow-visible">
  <div className="flex sm:justify-center gap-2 sm:gap-[30px] flex-nowrap sm:flex-wrap w-max sm:w-auto px-1">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex flex-col items-center justify-center min-w-[120px] sm:w-[200px] h-[120px] sm:h-[180px] p-2 sm:p-6 rounded transition-all duration-200
          ${
            tab.id === activeTab
              ? 'bg-white text-blue-950'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
      >
        <div className={`text-[28px] sm:text-[60px] mb-1 sm:mb-3 ${tab.id === activeTab ? 'text-blue-950' : 'text-gray-400'}`}>
          {tab.icon}
        </div>
        <span className="text-xs sm:text-lg font-semibold text-center">{tab.title}</span>
      </button>
    ))}
  </div>
</div>


      {/* Content Section */}
      {current && (
        <div className="bg-white mx-2 sm:mx-10 md:mx-32 p-4 sm:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 rounded-md shadow-md shadow-gray-300">
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">{current.title}</h2>
            <p className="text-sm sm:text-lg text-gray-700 mb-4 leading-relaxed">{current.description}</p>
            <div className="mb-6">
              <p className="text-base sm:text-xl font-semibold mb-2">Usual Symptoms:</p>
              <ul className="list-disc list-inside text-sm sm:text-lg text-gray-700 space-y-1">
                {current.symptoms.map((symptom, i) => (
                  <li key={i}>{symptom}</li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-900 text-white text-sm sm:text-base px-6 py-2 rounded hover:bg-blue-800 transition">
              LEARN MORE
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <div className="overflow-hidden rounded-md shadow-md">
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={400}
                className="w-full h-[250px] sm:h-[400px] md:h-[70vh] object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
