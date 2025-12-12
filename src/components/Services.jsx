import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell } from "react-icons/fa";

const services = [
  {
    icon: <FaPlane size={30} className="text-4xl text-blue-500" />,
    title: "Flight Booking",
    description: "Book your flights effortlessly and explore destinations worldwide.",
  },
  {
    icon: <FaHotel size={30} className="text-blue-500" />,
    title: "Hotel Stays",
    description: "Find the best hotels for a relaxing and comfortable stay.",
  },
  {
    icon: <FaUmbrellaBeach size={30} className="text-blue-500" />,
    title: "Beach Holidays",
    description: "Enjoy sunny destinations and unwind under the palm trees.",
  },
  {
    icon: <FaConciergeBell size={30} className="text-blue-500" />,
    title: "Travel Assistance",
    description: "Get 24/7 travel support and concierge services wherever you are.",
  },
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8'>Our Services</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {services.map((service, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <div className="mb-4">{service.icon}</div>
                    
                        <h4 className='text-xl font-bold mb-2'>{service.title}</h4>
                        <p className='text-gray-600'>{service.description}</p>

                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Services
