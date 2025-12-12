import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      
      {/* Top Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Travel Agency</h2>
          <p className="text-gray-300 leading-relaxed">
            Your trusted partner for unforgettable travel experiences.
            Explore the world with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col gap-2 text-gray-300">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          
          <div className="flex space-x-4 mb-4">
            <FaFacebookF size={24} className="cursor-pointer text-blue-500 hover:text-blue-600" />
            <FaInstagram size={24} className="cursor-pointer text-pink-500 hover:text-pink-600" />
            <FaTwitter size={24} className="cursor-pointer text-blue-400 hover:text-blue-500" />
            <FaYoutube size={24} className="cursor-pointer text-red-500 hover:text-red-600" />
          </div>

          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg border border-blue-600 font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between px-6 container mx-auto">
        
        <p className="text-gray-300 text-sm">
          © 2025 Travel Agency. All rights reserved. Powered by passion for travel.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0 text-gray-300 text-sm">
          <Link to="" className="hover:text-white">Privacy Policy</Link>
          <Link to="" className="hover:text-white">Terms of Services</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
