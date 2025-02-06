import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistCount(storedWishlist.length);  // Update wishlist count
  }, [wishlistCount]); // Re-run this effect whenever wishlistCount changes

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          E-DROBE
        </Link>

        {/* Hamburger Menu for Mobile */}
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

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link to="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/shop" className="hover:text-blue-300 transition">
            Shop
          </Link>
          <Link to="/aboutt" className="hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/product" className="hover:text-blue-300 transition">
            Product
          </Link>
          <Link to="/contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
        </div>

        {/* Cart and Wishlist Icons */}
        <div className="flex items-center space-x-6">
          {/* Wishlist Icon */}
          <div className="relative">
            <Link to="/wishlist" className="text-white">
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
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            </Link>
            {wishlistCount > 0 && (
              <sup className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </sup>
            )}
          </div>

          {/* Cart Icon */}
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
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center bg-blue-700 py-4 space-y-4">
          <Link to="/" className="text-white hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/shop" className="text-white hover:text-blue-300 transition">
            Shop
          </Link>
          <Link to="/aboutt" className="text-white hover:text-blue-300 transition">
            About
          </Link>
          <Link to="/product" className="text-white hover:text-blue-300 transition">
            Product
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
