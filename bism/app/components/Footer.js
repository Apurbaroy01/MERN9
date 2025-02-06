import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-4 px-6 text-center text-gray-400 text-sm">
      <p className="space-x-2">
        <span>&copy; Copyright - 2025</span>
        <span>|</span>
        <span>Design & Development: <a href="https://www.facebook.com/Apurbaroy01" className="text-white hover:underline">Apurba-roy</a></span>
        <span>|</span>
        <span>All Rights Reserved</span>
        <span>|</span>
        <span>Apurba Helth Care Center</span>
      </p>
      <p className="mt-2">
        Center is a 501(c)(3) nonprofit organization, EIN 54-637954
      </p>
    </footer>
  );
};

export default Footer;
