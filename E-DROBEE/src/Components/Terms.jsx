import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-8 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center">Terms and Conditions</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to <span className="font-semibold text-gray-600">[E-DROBE]</span>. By using our website and services, you agree to abide by the following Terms and Conditions. Please read them carefully before proceeding.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">1. User Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the website, you agree to comply with the terms outlined in this agreement. You are responsible for maintaining the confidentiality of your account details.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">2. Account Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for ensuring the accuracy of the information provided during registration. You agree to update your details if any of the information changes.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">3. Product Information and Availability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We aim to provide accurate product descriptions and availability information. However, we cannot guarantee the availability of all items, and prices may be subject to change without prior notice.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">4. Payment and Billing</h2>
            <p className="text-gray-700 leading-relaxed">
              All payments must be made through our secure payment gateway. You agree to provide accurate and complete billing information, including your name, address, and payment details.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">5. Returns and Refunds</h2>
            <p className="text-gray-700 leading-relaxed">
              Our return policy allows you to return products within 30 days of receipt. Please refer to our detailed return policy for further instructions on how to initiate a return or refund.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">6. Shipping and Delivery</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We offer a variety of shipping options. Delivery times may vary based on your location and the selected shipping method. You are responsible for providing accurate shipping information to ensure timely delivery.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, images, logos, and graphics, is the property of [E-DROBE] or our licensors. You may not use any content without prior written permission.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall [E-DROBE] be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website or products.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These terms are governed by and construed in accordance with the laws of your jurisdiction. Any disputes will be resolved in the courts located in your region.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">10. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions regarding these Terms and Conditions, please contact us:
          </p>
          <ul className="list-none text-gray-700 space-y-3">
            <li>Email: <a href="mailto:support@example.com" className="text-gray-600 hover:underline">support@example.com</a></li>
            <li>Phone: <span className="font-medium">+1 (123) 456-7890</span></li>
            <li>Address: 123 Business Lane, Suite 789, Your City, Country</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-700 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} <span className="font-semibold">[E-DROBE]</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
