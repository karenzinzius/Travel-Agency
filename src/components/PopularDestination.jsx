import TokyoImage from '../assets/images/japan.jpeg';
import NewYorkImage from '../assets/images/newyork.jpg';
import BerlinImage from '../assets/images/berlin.jpeg';
import ParisImage from '../assets/images/paris.jpeg';
 
const destinations = [
  {
    title: "Tokyo, Japan",
    image: TokyoImage,
    description: "Explore the vibrant city of Tokyo and its unique culture!",
  },
  {
    title: "New York, USA",
    image: NewYorkImage,
    description: "Visit New York and experience the city that never sleeps!",
  },
  {
    title: "Berlin, Germany",
    image: BerlinImage,
    description: "Discover Berlin’s history, art, and amazing nightlife!",
  },
  {
    title: "Paris, France",
    image: ParisImage,
    description: "Fall in love with Paris and its iconic landmarks!",
  },
];

const PopularDestination = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8'>Popular Destinations</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destinations.map((city, index) => (
                <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                    <img src={city.image} alt={city.title} className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'/>
                    <div className='p-4'>
                        <h4 className='text-xl font-bold mb-2'>{city.title}</h4>
                        <p className='text-gray-600'>{city.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopularDestination
