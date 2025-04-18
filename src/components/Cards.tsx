'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
  const cards = [
    {
      title: "Certified Healthcare Specialists",
      image: "https://res.cloudinary.com/dzngpgki4/image/upload/v1744826455/Flux_Dev_A_warm_welcoming_scene_of_a_home_healthcare_nurse_ass_3_hodvwb.jpg",
      text: "Our experienced team helps you choose the right medical equipment based on your needs. We support recovery, comfort, and long-term health at every step...",
      link: "/about"
    },
    {
      title: "Quality Equipment & Support",
      image: "https://res.cloudinary.com/dzngpgki4/image/upload/v1744825085/Flux_Dev_A_healthcare_professional_having_a_warm_conversation__0_uwv7ps.jpg",
      text: "We offer new and used medical products like wheelchairs, hospital beds, and orthopedic items. All equipment includes expert help and service options.",
      link: "/services"
    },
    {
      title: "Remote Consult & Guidance",
      image: "https://res.cloudinary.com/dzngpgki4/image/upload/v1744825085/Flux_Dev_A_healthcare_professional_having_a_warm_conversation__3_joiarg.jpg",
      text: "Can’t visit us in person? Our staff provides virtual consults, product help, and guidance on funding programs to support your care from home..",
      link: "/telehealth"
    }
  ];

  return (
    <div className="md:py-16 md:m-5 py-5 m-2  bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 md:gap-6 gap-1">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              className="md:p-4 p-1 "
            >
              <div className="bg-white rounded-lg md:p-5 p-1 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 md:h-full overflow-hidden">
                <Link href={card.link} className="block relative">
                  <div className="relative md:h-64 h-24" >
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>

                  <div className="md:p-2 p-1">
                    <div className="">
                      <h4 className="md:text-2xl text-[8px] font-bold text-[#091D42]">{card.title}</h4>
                      <p className="md:text-sm text-[4px] text-gray-500">{card.text}</p>
                      <div className="mt-4">
                        <button className="hover-fill-button relative w-full md:py-2 py-0 md:px-4 px-1 overflow-hidden border-2 border-[#091D42] text-[#091D42] bg-transparent transition-all duration-300">
                          <span className="relative z-10 text-[8px] md:text-[20px]">READ MORE</span>
                          <div className="absolute inset-0 bg-[#091D42] origin-left transform scale-x-0 transition-transform duration-300 w-full h-full"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-fill-button {
          position: relative;
          overflow: hidden;
          border: 2px solid #091D42;
          color: #091D42;
          background: transparent;
          transition: color 0.3s ease;
        }

        .hover-fill-button:hover {
          color: white;
        }

        .hover-fill-button div {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #091D42;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }

        .hover-fill-button:hover div {
          transform: scaleX(1);
        }

        .hover-fill-button span {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Cards;
