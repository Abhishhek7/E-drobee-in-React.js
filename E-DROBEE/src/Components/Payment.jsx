import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [showPopup, setShowPopup] = useState(false); 
  const [cart, setCart] = useState([]); 
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

 
  const validateForm = () => {
    const errors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const cardNumberRegex = /^\d{16}$/; // Validate 16 digits
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    const cvvRegex = /^\d{3}$/; // 3 digits for CVV

    if (!formData.name || !nameRegex.test(formData.name)) {
      errors.name = 'Please enter a valid name on the card.';
    }

    if (!formData.cardNumber || !cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = 'Please enter a valid 16-digit card number.';
    }

    if (!formData.expiry || !expiryRegex.test(formData.expiry)) {
      errors.expiry = 'Please enter a valid expiry date (MM/YY).';
    }

    if (!formData.cvv || !cvvRegex.test(formData.cvv)) {
      errors.cvv = 'Please enter a valid 3-digit CVV.';
    }

    setFormErrors(errors);

    
    return Object.keys(errors).length === 0;
  };

  const handlePayment = (paymentMethod) => {
    
    if (paymentMethod === 'Card Payment' && !validateForm()) return;

   
    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Cart Items:`, cart);

    
    setShowPopup(true);

    
    localStorage.removeItem('cart');
    
    
    setTimeout(() => {
      navigate('/'); 
    }, 1000); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Payment
        </h2>

       
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cart Items</h3>
          <ul>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index} className="mb-2">
                  <span className="font-semibold">{item.productname}</span> - ${item.productPrice}
                </li>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </ul>
        </div>

        <form>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Card Payment</h3>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name on Card
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p className="text-red-600 text-sm">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              {formErrors.cardNumber && <p className="text-red-600 text-sm">{formErrors.cardNumber}</p>}
            </div>

            <div className="flex space-x-4 mb-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="expiry">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                />
                {formErrors.expiry && <p className="text-red-600 text-sm">{formErrors.expiry}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                />
                {formErrors.cvv && <p className="text-red-600 text-sm">{formErrors.cvv}</p>}
              </div>
            </div>
          </div>

          
          <div className="mt-6 flex justify-between space-x-4">
            <button
              type="button"
              onClick={() => handlePayment('Card Payment')}
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Pay with Card
            </button>

            <button
              type="button"
              onClick={() => handlePayment('Cash on Delivery')}
              className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Cash on Delivery
            </button>
          </div>
        </form>
      </div>

      
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Payment Successful!</h3>
            <p className="text-gray-700 mb-6">Thank you for your purchase. We are processing your order.</p>
            <button
              onClick={closePopup}
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
