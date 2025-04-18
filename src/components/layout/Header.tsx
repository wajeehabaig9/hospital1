'use client';

import Image from 'next/image';
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaPhoneAlt, FaShoppingCart, FaSearch, FaChevronDown, FaTimes, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [elementsOpen, setElementsOpen] = useState(false);
  const [dropdownOpenReports, setDropdownOpenReports] = useState(false);
  const [dropdownOpenGallery, setDropdownOpenGallery] = useState(false);

  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // To store the value of the search input
  const [openDropdowns, setOpenDropdowns] = useState<Record<number, boolean>>({}); // Store dropdown states

  const handleSearchClose = () => {
    setSearchQuery(""); // Clear the search query
    setIsSearchOpen(false); // Close the search bar
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdowns, setSubDropdowns] = useState<Record<string, boolean>>({});


  const elementsDropdownItems = [
    'About Us', 'Team', 'Dr Cv',
    'Services', 'Single Service', 'Cost Calculator',
    'Testimonials', 'Contact'
  ];
  const menuItems = [
    { key: "home", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "reports", label: "Products", path: "/reports" },
    { key: "resources", label: "Rental Booking", path: "/resourcesmain" },
    { key: "gallery", label: "Rental", path: "/Gallery" },
    { key: "communities", label: "Contact Us", path: "/communities" },
  ];

  return (
    <header className="shadow-sm      bg-white fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto py-3 lg:px-4 xl:px-4 px-4  flex items-center justify-between">

        {/* Logo & Nav */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-5  pr-10">
            <img src="https://res.cloudinary.com/dzngpgki4/image/upload/v1742848401/WhatsApp_Image_2025-03-25_at_1.32.31_AM_xyw9qn.jpg" alt="Cliniq Logo" width={80} height={80} />
          
          </div>

          <div className={`hidden  md:flex  transition-all duration-300`}>
            <ul className="flex space-x-6 items-center">
              {menuItems.map((item, index) => (
                <li key={item.key} className="border-b-2 border-transparent xl:text-[16px] md:text-[8px]  lg:text-[10px] hover:border-[#0D2659] transition duration-300">
                  {index === 2 ? ( // Dropdown for Reports
                    <div
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <span
                        className={`cursor-pointer flex items-center ${activeTab === "reports" ? "text-[#0D2659]" : "text-black"} hover:text-[#0D265A]`}
                        onClick={() => setActiveTab("reports")}
                      >
                        {item.label}
                        <FaChevronDown className={`ml-2 text-[13px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                      </span>
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 right-0  mx-auto md:w-[120vh] bg-white shadow-lg border border-gray-300 z-50 font-lato">
                          <div className="mx-auto w-full  p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">

                            {/* Column 1 */}
                            <div>
                              <h3 className="text-black text-[16px] font-bold lato border-blue-500 border-b h-8 mb-1">Mobility</h3>
                              <ul className="space-y-2 mt-2">
                                <li><a href="/product/product1" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Mobility Scooters</a></li>
                                <li><a href="https://mednation.ca/wheelchairs-and-transport-chairs/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Wheelchairs and Transport Chairs</a></li>
                                <li><a href="https://mednation.ca/power-wheelchairs/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Power Wheelchairs</a></li>
                                <li><a href="https://mednation.ca/wheelchair-cushions/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Wheelchair Cushions</a></li>
                                <li><a href="https://mednation.ca/walkers-and-rollators/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Walkers and Rollators</a></li>
                                <li><a href="https://mednation.ca/walking-aids/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Walking Aids</a></li>
                              </ul>
                            </div>

                            {/* Column 2 */}
                            <div>
                              <h3 className="text-black text-[18px] font-bold lato border-blue-500 border-b h-8 mb-1">Homecare</h3>
                              <ul className="space-y-2 mt-2">
                                <li><a href="https://mednation.ca/electrical-home-hospital-beds/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Electrical Home Hospital Beds</a></li>
                                <li><a href="https://mednation.ca/mattresses/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Mattresses</a></li>
                                <li><a href="https://mednation.ca/lift-chairs/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Lift Chairs</a></li>
                                <li><a href="https://mednation.ca/patient-lifts-and-slings/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Patient Lifts and Slings</a></li>
                                <li><a href="https://mednation.ca/bed-accessories/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Bed Accessories</a></li>
                              </ul>
                            </div>

                            {/* Column 3 */}
                            <div>
                              <h3 className="text-black text-[18px] font-bold lato border-blue-500 border-b h-8 mb-1">Bathroom Safety</h3>
                              <ul className="space-y-2 mt-2">
                                <li><a href="https://mednation.ca/shower-chairs/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Shower Chairs</a></li>
                                <li><a href="https://mednation.ca/commodes/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Commodes</a></li>
                                <li><a href="https://mednation.ca/transfer-benches/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Transfer Benches</a></li>
                                <li><a href="https://mednation.ca/toilet-frames-and-raised-toilet-seats/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Toilet Frames and Raised Toilet Seats</a></li>
                                <li><a href="https://mednation.ca/tub-and-grab-bars/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Tub and Grab Bars</a></li>
                                <li><a href="https://mednation.ca/handheld-shower-sprays-and-bath-mats/" className="text-gray-700 hover:text-[#0D265A] cursor-pointer text-[16px] lato">Handheld Shower Sprays and Bath Mats</a></li>
                              </ul>
                            </div>

                            {/* You can add Column 4 if needed */}

                          </div>
                        </div>
                      )}



                    </div>
                  ) : index === 4 ? ( // Dropdown for Gallery (5th Item)
                    <div className="relative" onMouseEnter={() => setGalleryDropdownOpen(true)} onMouseLeave={() => setGalleryDropdownOpen(false)}>
                      <span
                        className={`cursor-pointer flex items-center ${activeTab === "gallery" ? "text-[#0D2659]" : "text-black"} hover:text-[#0D265A]`}
                        onClick={() => setActiveTab("gallery")}
                      >
                        {item.label}
                        <FaChevronDown className={`ml-2 text-[13px] transition-transform ${galleryDropdownOpen ? 'rotate-180' : ''}`} />
                      </span>
                      {galleryDropdownOpen && (
                        <div className="absolute left-0  bg-white shadow-lg p-4 w-[250px] border border-gray-300 z-50 font-lato">
                          <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Rental Booking</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A] font-bold">Rental FAQs</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">WheelChair Rental</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Walking Aid Rental</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Lift Chair Rental</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">HomeCare Bed Rentals</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Mobility</a></li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.key}
                      href={item.path}
                      className={`${activeTab === item.key ? "text-[#0D2659]" : "text-black"} hover:text-[#0D2659] md:text-[8px] xl:text-[16px]  lg:text-[10px]`}
                      onClick={() => setActiveTab(item.key)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="hidden md:flex items-center space-x-3">
  <div className="flex items-center space-x-2 border-r pr-4 lg:flex xl:flex md:hidden">
    <FaPhoneAlt className="text-[#1E2A46] xl:text-[24px] lg:text-[20px] md:text-[14px]" />
    <div className="text-sm text-[#1E2A46]">
      <div className="font-medium xl:text-[14px] lg:text-[10px] md:text-[8px]">Emergency Line</div>
      <div className="xl:text-[12px]  lg:text-[6px] md:text-[8px]">+16475144609</div>
    </div>
  </div>

  <div className="flex items-center space-x-6 text-gray-600">
    <FaSearch className="xl:text-[18px] lg:text-[16px] md:text-[12px]" />
    <FaMapMarkerAlt className="xl:text-[18px] lg:text-[16px] md:text-[12px]" />
    <div className="relative md:pr-3">
      <FaShoppingCart className="xl:text-[18px] md:text-[14px]" />
      <span className="absolute -top-2 -right-2 text-[8px] bg-[#1E2A46] text-white rounded-full px-[6px]">0</span>
    </div>
  </div>
  <div className="flex justify-between items-center ">
  <button className="relative inline-block lg:px-4 md:px-2 xl:px-5 py-2 text-white transition-all duration-300 hover:bg-white hover:text-blue-950 font-medium rounded-md bg-blue-950 overflow-hidden border-none group">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
      <FaCommentDots className="mr-3 text-white md:text-[10px] lg:text-[10px] xl:text-[15px]" />
    </span>
    
    <span className="relative z-10 md:text-[8px] lg:text-[10px] xl:text-[15px] md:pl-8 lg:pl-4 xl:pl-5">Online Consultation</span>

    <span className="absolute top-0 left-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    <span className="absolute top-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
    <span className="absolute top-0 right-0 w-[2px] h-0 bg-white transition-all duration-300 group-hover:h-full"></span>
  </button>
</div>


</div>
<div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
<style jsx>{`
  .group {
    position: relative;
    overflow: hidden;
    background-color: #0C2E59;
    transition: border 0.3s ease, color 0.3s ease;
  }

  .group:hover {
    color: #fff;
    border: 2px solid #0C2E59;
  }

  .group::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #ffffff 25%, #0C2E59 25%, #0C2E59 50%, #ffffff 50%, #ffffff 75%, #0C2E59 75%, #0C2E59);
    background-size: 400% 400%;
    animation: moveBackground 3s linear infinite;
    z-index: -1;
  }

  .group:hover::before {
    animation-play-state: running;
  }

  @keyframes moveBackground {
    0% {
      top: 100%;
    }
    100% {
      top: -100%;
    }
  }
`}</style>



<AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-6 pt-4 pb-6 space-y-4 overflow-hidden"
          >
            {/* Main Links */}
            {menuItems.map((item, index) => (
              <div key={item.key}>
                {index === 2 ? ( // Dropdown for Reports
                  <div>
                    <div
                      className="text-black text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
                      onClick={() => setDropdownOpenReports(!dropdownOpenReports)}
                    >
                      {item.label}
                      <span className={`transform transition-transform ${dropdownOpenReports ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>

                    <AnimatePresence>
                      {dropdownOpenReports && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                          {/* Column 1 */}
                          <div>
                            <h3 className="text-black text-[18px] font-bold lato border-blue-500 border-b h-8 mb-1">Mobility</h3>
                            <ul className="space-y-2 mt-2">
                              <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Mobility Scooters</a></li>
                              <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Wheelchairs</a></li>
                            </ul>
                          </div>

                          {/* Column 2 */}
                          <div>
                            <h3 className="text-black text-[18px] font-bold lato border-blue-500 border-b h-8 mb-1">Homecare</h3>
                            <ul className="space-y-2 mt-2">
                              <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Home Hospital Beds</a></li>
                              <li><a href="#" className="text-gray-700 hover:text-[#0D265A]">Mattresses</a></li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : index === 4 ? ( // Dropdown for Gallery
                  <div>
                    <div
                      className="text-black text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
                      onClick={() => setGalleryDropdownOpen(!galleryDropdownOpen)}
                    >
                      {item.label}
                      <span className={`transform transition-transform ${galleryDropdownOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>

                    <AnimatePresence>
                      {galleryDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-2"
                        >
                          <a href="#" className="text-gray-700 hover:text-[#0D265A]">Rental Booking</a>
                          <a href="#" className="text-gray-700 hover:text-[#0D265A]">Rental FAQs</a>
                          <a href="#" className="text-gray-700 hover:text-[#0D265A]">Wheelchair Rental</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.key}
                    href={item.path}
                    className="block text-black text-lg border-b pb-2 hover:text-[#0C2E59]"
                    onClick={() => setActiveTab(item.key)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Contact and Icons */}
            <div className="pt-4 border-t mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-[#31C2B7]" />
                <div>
                  <div className="font-medium">Emergency Line</div>
                  <div className="text-sm">1-800-100-900</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-3 text-gray-600">
                <FaSearch />
                <FaMapMarkerAlt />
                <div className="relative">
                  <FaShoppingCart />
                  <span className="absolute -top-2 -right-2 text-[10px] bg-[#1E2A46] text-white rounded-full px-[6px]">0</span>
                </div>
              </div>

              <button className="w-full flex items-center justify-center bg-[#0C2E59] text-white px-4 py-2 text-[14px] rounded-md mt-4">
                <FaCommentDots className="mr-2 text-[#1E2A46]" />
                Online Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      </div>

      {/* Mobile Navigation */}
 

    </header>
  );
};

export default Header;