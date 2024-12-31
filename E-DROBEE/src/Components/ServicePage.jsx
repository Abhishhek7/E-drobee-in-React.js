import React from 'react';

const ServicePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20 shadow-lg">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-xl font-medium">Discover how we can help elevate your shopping experience with our professional services.</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold text-gray-700 mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-4">
          At <span className="font-semibold text-gray-600">[E-DROBE]</span>, we provide top-notch services that ensure the best shopping experience for our customers. From fast delivery to personalized assistance, we’ve got you covered.
        </p>
        <p className="text-lg text-gray-600">
          Explore our services below and see how we can serve you better.
        </p>
      </section>

      {/* Services Offered */}
      <section className="container mx-auto px-6 py-16 grid gap-12 lg:grid-cols-3">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Fast & Reliable Delivery</h3>
          <p className="text-gray-600 mb-6">
            We understand the importance of speed. Our delivery system is designed to ensure your order arrives on time, every time.
          </p>
          <a href="/delivery" className="inline-block px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-full transition-all">Learn More</a>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">Personalized Recommendations</h3>
          <p className="text-gray-600 mb-6">
            Get tailored product suggestions based on your shopping history and preferences. We’re here to make your shopping experience unique.
          </p>
          <a href="/recommendations" className="inline-block px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-full transition-all">Learn More</a>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-700 mb-4">24/7 Customer Support</h3>
          <p className="text-gray-600 mb-6">
            Our dedicated customer support team is available round the clock to assist you with any queries or issues you might have.
          </p>
          <a href="/support" className="inline-block px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-full transition-all">Learn More</a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-semibold text-gray-700 mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="bg-white p-8 shadow-lg rounded-xl max-w-xs">
              <p className="text-gray-600 mb-4">"Great service! The delivery was faster than expected, and the product quality exceeded my expectations. Highly recommend!"</p>
              <p className="text-gray-600 font-semibold">Jane Doe</p>
              <p className="text-gray-500">Customer</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-xl max-w-xs">
              <p className="text-gray-600 mb-4">"Excellent support. I had an issue with my order, and they resolved it immediately. I'll definitely shop here again!"</p>
              <p className="text-gray-600 font-semibold">John Smith</p>
              <p className="text-gray-500">Customer</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-xl max-w-xs">
              <p className="text-gray-600 mb-4">"The personalized recommendations helped me find exactly what I was looking for. Shopping here is a breeze!"</p>
              <p className="text-gray-600 font-semibold">Sarah Lee</p>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-semibold text-gray-700 text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg" required></textarea>
          </div>
          <button type="submit" className="w-full py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-lg transition-all">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} [E-DROBE]. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default ServicePage;


