// components/CardServices.js
export default function CardServices() {
    const services = [
      {
        title: "Interventional Cardiology and Cardic Surgery",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z" />
            <path d="M6 20v-2c0-2.21 3.58-4 6-4s6 1.79 6 4v2" />
          </svg>
        ),
      },
      {
        title: "Cardiology Telemedicine Appointments",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m4 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          </svg>
        ),
      },
      {
        title: "Preoperative optimization of patient expectations",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 4a1 1 0 011-1h2.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h8.586a1 1 0 011 1V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
            <path d="M8 11h8M8 15h4" />
          </svg>
        ),
      },
      {
        title: "Cardiac Insurance Care Policy for Patient",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 4.354a9 9 0 00-6 8.486c0 3.866 3.134 7 7 7s7-3.134 7-7a9 9 0 00-6-8.486z" />
          </svg>
        ),
      },
    ];
  
    return (
      <div className="flex flex-wrap gap-6 justify-center items-stretch px-6 py-10 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md hover:shadow-lg border-[1px] border-gray-300 transition-shadow p-6 w-64 flex flex-col items-center text-left"
          >
            <div className="mb-4">{service.icon}</div>
            <p className="text-md font-semibold text-gray-900 leading-snug">{service.title}</p>
          </div>
        ))}
      </div>
    );
  }
  