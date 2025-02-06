import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const navigate = useNavigate();

  
  const handleBuyNow = (product) => {
    
    navigate('/payment', { state: { product } });  
  };

  
  const handleRemove = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
  };

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Your Wishlist
        </h1>
        {wishlist.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-xl">Your wishlist is empty.</p>
            <p className="mt-4 text-sm text-blue-500">Start adding items to your wishlist.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
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
                    {product.productDescription.length > 80
                      ? product.productDescription.substring(0, 80) + '...'
                      : product.productDescription}
                  </p>
                  <h4 className="text-2xl font-bold text-blue-600 mb-6">
                    ${product.productPrice}
                  </h4>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleBuyNow(product)} 
                      className="w-full px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleRemove(product.id)} 
                      className="w-full px-4 py-2 text-red-500 border-2 border-red-500 rounded-full hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
