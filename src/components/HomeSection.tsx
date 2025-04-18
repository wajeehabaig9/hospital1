'use client';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const parallaxOffset = 120 - offsetY * 0.05;
  const bgPosition = `${isMobile ? 'left' : 'center'} ${parallaxOffset}%`;

  return (
    <section
      className="relative w-full md:h-[600px] h-[400px] overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/dzngpgki4/image/upload/v1744829875/2_ddhrop.png)',
        backgroundPosition: bgPosition,
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
      <div className="relative z-10 max-w-7xl mx-auto md:px-6 px-8 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <p className="md:text-sm text-[10px] font-semibold text-teal-400 uppercase">Our Experts</p>
          <h1 className="text-xl md:text-7xl font-extrabold leading-2 mt-2" style={{ lineHeight: '1.20' }}>
          Meet Our Healthcare <br/> Specialists
          </h1>
          <p className="oleo font-normal md:text-2xl text-sm mt-4">
          You're in good hands with our experienced team—committed to your comfort, recovery, and independence.
          </p>
          <button className="mt-8 md:px-6 md:py-4 px-4 py-2 border border-teal-400 text-white font-semibold md:text-sm text-[8px] hover:bg-teal-500 transition rounded-sm">
            MEET OUR TEAM
          </button>
        </div>
      </div>
    </section>
  );
}
