import Testimonial1 from '../assets/images/female.jpg';
import Testimonial2 from '../assets/images/male.jpg';
import Testimonial3 from '../assets/images/female2.jpg';

const testimonials = [
  {
    name: "Sarah Williams",
    image: Testimonial1,
    text: "This company made my trip unforgettable! Their service was flawless and incredibly personal.",
    location: "New York, USA",
  },
  {
    name: "Kenji Tanaka",
    image: Testimonial2,
    text: "Amazing experience from start to finish. Highly recommended for anyone who loves travel!",
    location: "Paris, France",
  },
  {
    name: "Marie Dubois",
    image: Testimonial3,
    text: "The team helped me plan the perfect vacation. Everything was smooth, stress-free, and beautiful.",
    location: "Tokyo, Japan" ,
  },
];

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h3>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((testimonial, index) => (
                <div key={index} className='bg-white rounded-lg p-6 shadow-md text-center cursor-pointer transform transition duration-300 hover:scale-110'>
                    <img src={testimonial.image} alt="" className="w-24 h-24 object-cover rounded-full mx-auto mt-4" />
                    
                        <h4 className='text-xl font-bold mb-2'>{testimonial.name}</h4>
                        <p className='text-gray-600'>{testimonial.location}</p>
                        <p className='text-gray-600 italic'>{testimonial.text}</p>

                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Clients 
