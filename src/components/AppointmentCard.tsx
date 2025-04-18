'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const options = [
  'Cardiovascular Examination',
  'Orthopedic Consultation',
  'General Health Checkup',
];

export default function AppointmentCard() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-6 gap-4">
        {/* Avatar & Dropdown */}
        <div className="flex items-start md:items-center gap-4 w-full">
          <div className="w-14 h-14 relative rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/dzngpgki4/image/upload/v1744649746/abstract-blur-defocused-pharmacy-drug-store_1203-9459_kisloz.avif"
              alt="Doctor Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex-1 relative" ref={dropdownRef}>
            <p className="md:text-xs text-[8px] text-black font-normal uppercase tracking-wide">Make an appointment for:</p>

            <div
              className="mt-1 cursor-pointer w-full"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              <div className="flex items-center justify-between border-b-2 border-[#0C2E59] pb-1">
                <p className="md:text-[20px] text-[14px] font-medium text-black truncate">{selectedOption}</p>
                <ChevronDown size={16} className="text-gray-600 ml-2" />
              </div>
            </div>

            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 bg-white border border-gray-200 rounded-md mt-2 w-full shadow-sm"
                >
                  {options.map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedOption(option);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Appointment Button */}
        <div className="w-full md:w-auto">
          <button className="hover-fill-button  bg-[#0B1F42] hover:bg-[#1b2538] text-white font-semibold text-sm px-6 py-4  flex items-center gap-2 w-full md:w-auto whitespace-nowrap">
            <Calendar size={16} />
            Make An Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
