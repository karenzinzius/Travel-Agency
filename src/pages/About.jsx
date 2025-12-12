import HeroImage from '../assets/images/hero.jpg';
import AboutImg from '../assets/images/us.jpeg'

const About = () => {
  return (
    <div className='bg-gray-200'>
            <div className='relative h-screen bg-cover bg-center h-96'
                  style={{ backgroundImage: `url(${HeroImage})` }}>
                  <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>About</h4>
                  </div>
          </div>
          <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex items-center justify-center'>
                    <img src={AboutImg} alt="About us" className="w-full rounded-lg h-auto shadow-md" />
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl font-bold mb-4'>Who We Are</h3>
                    <p className='text-gray-700 mb-4'>We are passionate travel agency dedicated to crafting unforgettable journeys made just for you. From weekend getaways to once-in-a-lifetime adventures, we focus on personalized planning, meaningful experiences, and stress-free travel. Our goal is to make exploration simple, inspiring, and perfectly tailored to your lifestyle.</p>

                    <h3 className='text-2xl font-bold mb-4'>Our Mission</h3>
                    <p className='text-gray-700 mb-4'>Our mission is to make travel simple, personal, and inspiring. We aim to connect you with authentic experiences, trusted destinations, and seamless planning so you can focus on the joy of discovering the world.</p>
                </div>
            </div>
          </div>
    </div>
  )
}

export default About
