import { useState } from 'react';
import { Link } from 'react-router-dom';
import heading from "../assets/Heading.jpg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
 <div className="header">
          {/* Top login bar */}
          <div className="bg-yellow-300 flex justify-around items-center">
        <div>
          <img
            src={heading}
            alt="Marriage"
            className="object-cover"
            height={100}
            width={250}
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className='flex'>
          <div className='border border-gray-300 p-[3px] rounded text-center w-14 text-gray-600 bg-gray-100'>AM</div>
          <input
            type="text"
            placeholder="Enter ID/E-mail/Mobile"
            className="border border-gray-300 p-[3px] rounded w-45"
          />
          </div>
          <div className='mt-4'>
          <input
            type="password"
            placeholder="Enter password"
            className="border border-gray-300 p-[3px] rounded w-45"
          />
            <div href="#" className="text-sm text-[#2A7E19] italic font-semibold hover:underline">
            Forgot password?
          </div>
          </div>
          <button className="bg-[#2A7E19] text-white px-2 py-1 rounded hover:bg-[#83ad7b] w-20">
            Login
          </button>
        
        </div>
      </div>

      {/* Header */}
      <header className="bg-red-600 p-2">
      <div className="container mx-auto flex justify-around items-center">
        

        {/* Menu for large screens */}
        <nav className="hidden md:flex space-x-4 text-white">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/careers" className="hover:underline">
            Careers
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
          </nav>
          <nav className="hidden md:flex space-x-4 text-white">
          <Link to="/cmd" className="hover:underline">
            CMD Desk
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
          </nav>
      

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-red-500">
          <nav className="flex flex-col items-center space-y-2 text-white">
            <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/careers" className="hover:underline" onClick={() => setIsOpen(false)}>
              Careers
            </Link>
            <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link to="/cmd" className="hover:underline" onClick={() => setIsOpen(false)}>
              CMD Desk
            </Link>
            <Link to="/help" className="hover:underline" onClick={() => setIsOpen(false)}>
              Help
            </Link>
          </nav>
        </div>
      )}
    </header>
 </div>
  );
};

export default Header;
