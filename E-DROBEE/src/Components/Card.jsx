import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Card = ({ updateCartCount }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
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
          {products.map((product) => (
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              key={product.id}
              data-aos="fade-up"
            >
              <img
                className="w-full h-56 object-cover"
                src={product.productImage}
                alt={product.productname}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.productname}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {truncateDescription(product.productDescription, 80)} {/* Limit description length */}
                </p>
                <h4 className="text-2xl font-bold text-blue-600 mb-6">
                  ${product.productPrice}
                </h4>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
