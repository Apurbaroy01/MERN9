'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TNN = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='bg-white flex flex-col md:flex-row  items-center border-b border-gray-300 px-4 py-4 md:px-9 md:h-13 gap-4 md:gap-0'>
      {/* Logo */}
      <Link href='/' className='flex justify-center items-center mb-2 md:mb-0'>
        <img
          src="/logo.jpg"
          width={200}
          className="w-20 md:w-30"
          alt="Logo Loading.."
        />
      </Link>

      {/* Search Bar */}
      <div className="flex border border-gray-300 text-black overflow-hidden w max-w-xs sm:max-w-sm md:max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-5 py-4 w-full focus:outline-none"
        />
        
        <button className="bg-blue-900 px-4 text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.8 3.9l4.3 4.3a1 1 0 01-1.4 1.4l-4.3-4.3A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TNN;