'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-6 md:px-0">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        About Us
      </h1>
      
      <section className="text-center mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Welcome to Our Hospitality Service
        </h2>
        <p className="text-lg text-gray-600">
          We offer a premium hospitality experience with a focus on comfort, luxury, and customer satisfaction. Our team is dedicated to providing personalized service to make your stay unforgettable.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 text-center">
            Our mission is to deliver exceptional experiences for every guest, combining luxury and comfort with outstanding service. Whether for leisure or business, we strive to meet the needs of our guests with warmth and professionalism.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Excellence in Service</li>
            <li>Commitment to Quality</li>
            <li>Warmth and Welcoming Atmosphere</li>
            <li>Respect and Integrity</li>
          </ul>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Meet Our Team
        </h2>
        <div className="flex justify-center items-center space-x-8">
          
          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
            <Image src="/apu.jpg" alt="Team Member " width={128} height={128} className="object-cover"/>
          </div>
          
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Our team is made up of dedicated professionals who are passionate about providing the best possible service to our guests. With years of experience in the hospitality industry, we are here to ensure your comfort and satisfaction.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Have questions? Reach out to us and we’ll be happy to assist.
        </p>
        <a href="apurbaroy00011@gmail.com" className="text-blue-600 underline">
          Email Us
        </a>
        
      </section>
    </div>
  );
};

export default AboutPage;
