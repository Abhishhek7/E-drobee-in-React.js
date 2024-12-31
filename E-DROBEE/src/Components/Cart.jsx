import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ updateCartCount }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const deleteCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    updateCartCount(0); 
  };

  const buyNow = () => {
    navigate('/payment'); // Navigate to the payment page
  };

  const truncateDescription = (description, maxLength = 60) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            Your cart is empty. <a href="/" className="text-blue-500 underline">Shop Now</a>
          </p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.productImage}
                      alt={item.productname}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{item.productname}</h3>
                      <p className="text-gray-600">${item.productPrice}</p>
                      <p className="text-gray-500 text-sm">{truncateDescription(item.productDescription, 80)}</p> {/* Truncated description */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-between">
              <button
                onClick={buyNow}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Buy Now
              </button>
              <button
                onClick={deleteCart}
                className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
