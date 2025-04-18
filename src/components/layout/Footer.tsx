// components/Footer.tsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#012452] text-white text-sm font-normal px-4 sm:px-6 md:px-16 lg:px-32 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 border-b border-gray-500 pb-6">
        {/* Logo & Description */}
        <div>
          <div className="text-2xl font-bold mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <img
              src="https://res.cloudinary.com/dzngpgki4/image/upload/v1742848401/WhatsApp_Image_2025-03-25_at_1.32.31_AM_xyw9qn.jpg"
              alt="logo"
              className="w-20 h-20 object-cover rounded-full"
            />
            <span className="text-white text-xl sm:text-xl">Clarington Home Healthcare</span>
          </div>
          <p className="leading-relaxed text-[14px]">
            Clarington Home Healthcare is a Canadian company offering full-service medical equipment supply, committed to providing superior care. We prioritize our customers' health with personalized attention and care, helping them manage their conditions and regain independence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 mt-6 sm:mt-0">Services</h4>
          <ul className="space-y-1 text-[14px]">
            <li>Wheelchair Sales & Rentals</li>
            <li>Hospital Bed Sales & Rentals</li>
            <li>Bathroom Safety Equipment</li>
            <li>Assistive Furniture</li>
            <li>Lift & Ramps Installation</li>
          </ul>
        </div>

        {/* Pricing & Policies */}
        <div>
          <h4 className="font-semibold mb-3 mt-6 sm:mt-0">Policies & Pricing</h4>
          <ul className="space-y-1 text-[12px]">
            <li>Pricing subject to change without prior notice</li>
            <li>Sales Tax applies where required by law</li>
            <li>Payment methods: Visa, MasterCard, American Express, Discover</li>
            <li>Return Policy: 14 days return with original receipt</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 mt-6 sm:mt-0">Connect</h4>
          <div className="flex space-x-4 text-white text-md mb-4">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          </div>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FiPhone /> +16475144609
            </p>
            <p className="flex items-center gap-2">
              <FiMail /> info@claringtonhealthcare.com
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin /> 3437 Derry Rd E Unit 04, Mississauga, ON L4T 1A8, Canada
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs pt-6 gap-3 text-center sm:text-left">
        <p>©2025 CLARINGTON HOME HEALTHCARE. All rights reserved</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
