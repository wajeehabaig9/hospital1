import React from 'react';

const CardiacImagingSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 md:py-16 lg:px-8 ">
        <h1 className='text-[#091D42] font-bold  text-[14px] md:text-[18px]'>Cardiac Monitoring Solutions</h1>
        <h1 className='text-[#091D42] font-extrabold  text-[16px] md:text-[38px] md:mb-0  mb-10' style={{lineHeight:'1.20'}}>Reliable equipment for stress testing <br/> and heart health—delivered with care.

</h1>

      <div className="flex flex-col md:flex-row  md:mt-10 justify-between space-y-10 md:space-y-0 md:space-x-1 items-center">

        {/* Image Column */}
        <div className="w-full md:w-[70vh] flex justify-center h-full">
          <img 
            src="https://res.cloudinary.com/dzngpgki4/image/upload/v1744825085/Flux_Dev_A_neat_display_of_various_home_healthcare_services_te_1_xal16o.jpg"
            alt="Cardiac Imaging"
            className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-between md:space-y-10 space-y-2 w-full md:w-[50%]">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900">
            Cardiac Imaging and Testing
          </h2>

          <div className="space-y-1 md:space-y-10">
            {[ 
              {
                title: 'Approach',
                description: 'We offer timely access to cardiac monitoring tools and testing equipment to help assess cardiovascular health. Our focus is on early detection, prevention, and improved heart care using proven medical technology.',
                iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: 'Experts ',
                description: 'Our care team includes experienced specialists and trained professionals who collaborate to guide you through every step—offering personalized support for heart health and recovery.',
                iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
              },
              {
                title: 'Client ',
                description: 'We support recovery through advanced monitoring tools and assistive technology, helping clients stay active and manage heart conditions effectively at home or in care settings.',
                iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#002C5D] flex items-center justify-center transform transition duration-300 ease-in-out hover:bg-[#002C5D] hover:text-white">
                    <svg className="w-6 h-6 text-[#002C5D] fill-none stroke-currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className="mt-2 md:text-sm text-[12px] font-semibold text-gray-900 text-center">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-[10px] md:text-[16px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardiacImagingSection;
