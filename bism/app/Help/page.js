'use client';

import { useState } from 'react';
import axios from 'axios'; // Make sure to import axios

const HelpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call your backend API
      const response = await axios.post('/api/users', {
        name,
        email,
 // Fixing the variable name here
      });

      console.log(response.data);
      setSubmitted(true);

      // Clear form fields
      setName('');
      setEmail('');
// Clear the message field too
    } catch (err) {
      console.log('Error creating user:', err.message);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6 md:px-0">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Help & Support</h1>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800">How do I make a reservation?</h3>
            <p className="text-lg text-gray-600">You can make a reservation by visiting our booking page or by contacting our customer support team.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">What amenities do you offer?</h3>
            <p className="text-lg text-gray-600">We offer a range of amenities, including free Wi-Fi, room service, a fitness center, and an on-site restaurant.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">Can I cancel or modify my booking?</h3>
            <p className="text-lg text-gray-600">Yes, you can modify or cancel your booking up to 24 hours before your check-in date. Please refer to our cancellation policy for more details.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">Do you offer transportation services?</h3>
            <p className="text-lg text-gray-600">Yes, we offer transportation services including airport transfers and local shuttle services. Please contact our concierge for more information.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          If you need any further assistance, feel free to reach out to our support team. We are happy to help with any questions or concerns you may have.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-blue-500 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              rows="4"
              className=" text-black-500 mt-1 block w-48 px-3 py-2 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit Message
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-600">Thank you for reaching out! We will get back to you soon.</p>
        )}
      </section>

      {/* Contact Information Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Other Ways to Reach Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          You can also reach us through the following methods:
        </p>
        <ul className="space-y-3 text-lg text-blue-600">
          <li>Email: apurbaroy00011@.com</li>
          <li>Phone: (+880)1876-469-178</li>
          <li>Address: Boyra, Khulna sadar, Khulna</li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
