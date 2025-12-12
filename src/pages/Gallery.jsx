import HeroImage from '../assets/images/hero.jpg';
import photo2 from '../assets/images/japan.jpeg';
import photo3 from '../assets/images/newyork.jpg';
import photo4 from '../assets/images/berlin.jpeg';
import photo5 from '../assets/images/paris.jpeg';
import photo6 from '../assets/images/photo6.jpg';
import photo7 from '../assets/images/photo7.jpg';
import photo8 from '../assets/images/photo8.jpeg';
import photo9 from '../assets/images/photo9.jpeg';
import photo10 from '../assets/images/photo10.jpeg';
import photo11 from '../assets/images/photo11.jpeg';
import photo12 from '../assets/images/photo12.jpeg';
import photo13 from '../assets/images/photo13.jpeg';

const images = [photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13];

const Gallery = () => {
  return (
    <div>
    <div className='relative h-screen bg-cover bg-center h-96'
      style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className='absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center'>
        <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h4>
      </div>
    </div>
        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {images.map((photo, index) => (
              <div key={index} className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105'>
                <img src={photo} alt="" className='w-full h-full object-cover'/>
              </div>
            ))}
          </div>
        </div>

    </div>
    
  )
}

export default Gallery
