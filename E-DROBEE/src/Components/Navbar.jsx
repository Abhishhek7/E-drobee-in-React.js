import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-white text-2xl font-bold">
          E-DROBE
        </Link>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-300 transition">
            Shop
          </Link>
          <Link to="/about" className="hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
        </div>

        
        <div className="relative">
          <Link to="/cart" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-4 8m10-8l-1.5-4M5.4 5h14.2"
              />
            </svg>
          </Link>
          {cartCount > 0 && (
            <sup className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </sup>
          )}
        </div>
      </div>

      
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center bg-blue-700 py-4 space-y-4">
          <Link to="/" className="text-white hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/shop" className="text-white hover:text-blue-300 transition">
            Shop
          </Link>
          <Link to="/about" className="text-white hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
