import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

const Card = ({ updateCartCount, updateWishlistCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://6763bd2817ec5852cae9c5bf.mockapi.io/agro/vi/api/products'
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...storedCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCartCount(updatedCart.length);
  };

  const handleWishlist = (product) => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
     const isAlreadyAdded = storedWishlist.find((item) => item.id === product.id);

    if (!isAlreadyAdded) {
      const updatedWishlist = [...storedWishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      if (updateWishlistCount) {
        updateWishlistCount(updatedWishlist.length);
      }
    } else {
      
      alert('Product is already in your wishlist.');
    }
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  const renderProducts = products.slice(0, 8);  

  const handleGetMore = () => {
    const remainingProducts = products.slice(8);
    navigate('/product', { state: { products: remainingProducts } });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Explore Our Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderProducts.map((product) => {
            const isInWishlist = wishlist.some((item) => item.id === product.id);
            return (
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl relative" 
                key={product.id}
                data-aos="fade-up"
              >
                <img
                  className="w-full h-56 object-cover"
                  src={product.productImage}
                  alt={product.productname}
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {product.productname}
                    </h3>
                    <button
                      onClick={() => handleWishlist(product)}
                      className={`transition-all duration-300 ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`}
                    >
                      {isInWishlist ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke="none"
                        >
                          <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          />
                        </svg>
                      ) : (
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
                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateDescription(product.productDescription, 80)}
                  </p>
                  <h4 className="text-2xl font-bold text-blue-600 mb-6">
                    ${product.productPrice}
                  </h4>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => addToCart(product)}
                      className="w-full px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-12">
          <button
            onClick={handleGetMore}
            className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition"
          >
            Get More Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
