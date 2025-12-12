import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import HeroImage from '../assets/images/hero.jpg';

const Contact = () => {
  return (
    <div className='bg-gray-200'>
      <div className='relative h-screen bg-cover bg-center h-96'
            style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
              <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h4>
            </div>
    </div>
    <div className="container mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Details */}
        <div className="card bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Contact Details</h3>
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-blue-500 mr-2"/>
            <p>info@travelagency.com</p>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-blue-500 mr-2"/>
            <p>+123 456 7890</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkedAlt className="text-blue-500 mr-2"/>
            <p>123 Travel St, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                id="Name" 
                placeholder="Enter Name" 
                className="w-full p-2 border border-gray-300 rounded" 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                id="Email" 
                placeholder="Enter Email" 
                className="w-full p-2 border border-gray-300 rounded"  
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea 
                id="Message" 
                placeholder="Write message" 
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button type="submit" className="p-2 px-4 bg-blue-500 text-white rounded">
              Send Message
            </button>
          </form>
        </div>
    </div>
      </div>
    </div>
  );
}


export default Contact
