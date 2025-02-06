import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-gray-400 py-8 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Us Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 6.003c0-1.1.896-2 2-2h16c1.1 0 2 .9 2 2v11.994c0 1.1-.896 2-2 2h-16c-1.1 0-2-.9-2-2v-11.994zm10 4.503c1.4 0 2.55 1.162 2.55 2.592 0 1.43-1.15 2.592-2.55 2.592s-2.55-1.162-2.55-2.592c0-1.43 1.15-2.592 2.55-2.592zm0-1.506c-2.232 0-4.05 1.833-4.05 4.098 0 2.264 1.818 4.098 4.05 4.098 2.232 0 4.05-1.834 4.05-4.098 0-2.265-1.818-4.098-4.05-4.098zm-5.25 2.752c-.689 0-1.25.564-1.25 1.25s.561 1.25 1.25 1.25 1.25-.564 1.25-1.25-.561-1.25-1.25-1.25z"/></svg>
              <span>apurbaroy00011@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.934 15.934 0 006.59 6.59l2.12-2.12a1 1 0 011.09-.27 11.49 11.49 0 003.58.57 1 1 0 011 1v3.5a1 1 0 01-1 1A19.013 19.013 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.52.57 3.58a1 1 0 01-.27 1.09l-2.12 2.12z"/></svg>
              <span>Phone: (+880)1876-469-178</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 3h-18c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 14h-3v-5h3v5zm1-5h3v5h-3v-5zm-5-5h2v2h-2v-2zm-3 10h4v-2h-4v2zm11-2h4v2h-4v-2zm-9-4h8v2h-8v-2zm0-4h8v2h-8v-2z"/></svg>
              <span>Fax: (+880)1876-469-178</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.75c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
              <span>Address: Boyra, Khulna Sadar, Khulna </span>
            </li>
          </ul>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col space-y-2 md:items-start">
          <ul className="space-y-2">
            <li><a href="#" className="text-white hover:underline">HOME</a></li>
            <li><a href="#" className="text-white hover:underline">CPR CLASSES</a></li>
            <li><a href="#" className="text-white hover:underline">HEALTHY AGING</a></li>
            <li><a href="#" className="text-white hover:underline">AHEC SCHOLARS</a></li>
            <li><a href="#" className="text-white hover:underline">TOBACCO</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
