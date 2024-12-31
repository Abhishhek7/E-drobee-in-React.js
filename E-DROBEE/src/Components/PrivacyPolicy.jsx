import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <header className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-8 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-center">Privacy Policy</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Introduction</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <span className="font-semibold text-gray-600">[E-DROBE]</span>, your privacy is our priority. This policy explains how we collect, use, and protect your personal information. By using our services, you consent to the practices outlined here.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li><strong>Personal Information:</strong> Name, email, phone, shipping address, and payment details.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions with our site.</li>
              <li><strong>Cookies:</strong> Preferences and browsing behavior for a tailored experience.</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Process orders and payments securely.</li>
              <li>Provide customer service and support.</li>
              <li>Send promotional offers and updates.</li>
              <li>Improve our website and personalize your experience.</li>
              <li>Comply with legal requirements.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We value your privacy and will never sell your data. We only share information with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Payment processors to handle transactions securely.</li>
            <li>Shipping providers for order deliveries.</li>
            <li>Analytics tools to improve site performance.</li>
            <li>Authorities when required by law to ensure safety and compliance.</li>
          </ul>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You have the following rights regarding your data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Access and update your personal information.</li>
              <li>Request data deletion from our records.</li>
              <li>Opt out of promotional communications.</li>
              <li>File a complaint with data protection authorities.</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard measures to safeguard your data, including encryption, secure storage, and regular security audits to prevent unauthorized access.
            </p>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about this policy, please contact us:
          </p>
          <ul className="list-none text-gray-700 space-y-3">
            <li>Email: <a href="mailto:privacy@example.com" className="text-gray-600 hover:underline">privacy@example.com</a></li>
            <li>Phone: <span className="font-medium">+1 (123) 456-7890</span></li>
            <li>Address: 123 Privacy Lane, Suite 456, Your City, Country</li>
          </ul>
          <div className="mt-6 text-center">
            <a href="mailto:privacy@example.com" className="inline-block px-6 py-3 text-white bg-gray-600 hover:bg-gray-700 rounded-full transition-all">Get in Touch</a>
          </div>
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

export default PrivacyPolicy;
