import { useState, useRef } from 'react';
import { Phone, Calendar, Check, HeartPulse } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 overflow-hidden h-[400px]">
      <div className="p-5 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-3 flex justify-start">
          <div className="bg-blue-100 p-3 rounded-full">
            <HeartPulse className="w-6 h-6 text-blue-600" />
          </div>
        </div>

        {/* Title + Divider */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 text-left">{title}</h3>
        <div className="border-t border-gray-200 mb-2" />

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-0 flex-grow line-clamp-4">
          {description}
        </p>

        {/* Checklist */}
        <div className="mt-0">
          <div className="space-y-1">
            {[
              'Board-Certified Cardiologists',
              'Personalized Health Plans',
              '24/7 Emergency Access',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-900 flex items-center justify-center">
                  <Check className="text-white" size={10} />
                </div>
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Read More */}
        <button className="w-full bg-blue-950 hover:bg-transparent text-white hover:text-blue-900 font-semibold py-2 px-4 transition-all duration-300 border-2 border-blue-900 mt-3">
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default function CardiologyClinicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 relative md:px-10">
      {/* Left Side (Video + Card) */}
      <div className="lg:w-[80%] flex flex-col pl-8">
        {/* Desktop Video */}
        <div className="hidden lg:block flex-1 relative h-[600px]">
          <div className="absolute inset-0 bg-blue-950/30 h-full w-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover mix-blend-multiply"
              loop
              muted
              playsInline
              preload="metadata"
              src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2019/02/video_service.mp4?_=1"
            />

            {/* Play Button */}
            <div
              className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={togglePlay}
            >
              <div className="bg-white/20 rounded-full p-4 hover:bg-white/30 transition-all">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card */}
        <div className="lg:hidden md:flex hidden mt-48 px-4">
          <ServiceCard
            title="Heart Health Screening"
            description="Our proactive screening identifies heart risks early to ensure long-term wellness and peace of mind."
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="lg:w-full bg-[#0F365A] py-12 lg:px-16 lg:py-24 relative px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="md:text-2xl text-md font-bold text-white leading-tight">
            Our Services
          </h1>
          <h1 className="md:text-6xl text-[14px] font-bold text-white mb-3 leading-tight">
            Advanced Heart & Vascular Treatments
          </h1>
          <p className="md:text-xl text-[10px] text-blue-200/90 mb-8 oleo ">
            Compassionate care tailored for your heart
          </p>

          {/* Contact */}
          <div className="flex flex-col md:flex-row gap-10 mb-12">
            {/* Phone */}
            <div className="flex items-center">
              <div className="bg-transparent p-2 rounded-lg mr-3">
                <Phone className="text-white md:w-20 w-5" />
              </div>
              <div>
                <p className="md:text-sm text-[12px] text-white mb-1">Call Our Heart Helpline</p>
                <p className="md:text-xl text-[10px] font-bold text-white animated-underline">
                  021 456 7890
                </p>
              </div>
            </div>

            {/* Booking */}
            <div className="flex items-center">
              <div className="bg-transparent  p-2 rounded-lg mr-3">
                <Calendar className="text-white md:w-20 w-5" />
              </div>
              <div>
                <p className="text-sm text-white mb-1">Schedule an Appointment</p>
                <p className="text-xl font-bold text-white animated-underline">Get Started</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="hidden lg:block absolute -left-[15%] w-[300px] z-10 -translate-x-1/2 pb-0">
          <ServiceCard
            title="Heart Health Screening"
            description="Our proactive screening identifies heart risks early to ensure long-term wellness and peace of mind."
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <ServiceCard
            title="Cholesterol & Hypertension Management"
            description="We offer custom plans to control blood pressure and cholesterol, supporting a healthier heart."
          />
          <ServiceCard
            title="Arrhythmia & Rhythm Therapy"
            description="Precise diagnosis and cutting-edge treatment for irregular heartbeat and related conditions."
          />
        </div>

        {/* Hover underline effect */}
        <style jsx>{`
          .animated-underline {
            position: relative;
            display: inline-block;
          }
          .animated-underline::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: white;
            transition: width 0.3s ease-out;
          }
          .animated-underline:hover::after {
            width: 100%;
          }
        `}</style>
      </div>
    </div>
  );
}
