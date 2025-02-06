"use client"; 
import React from 'react';
import Link from 'next/link';
const Navbar = () => {

  return (
    <nav className="bg-white flex justify-center  items-center px-4 md:h-16 h-auto flex-col md:flex-row">
    <ul className="flex flex-col md:flex-row gap-4 md:gap-24 text-gray-600 font-bold w-full md:w-auto">
        <Link href="/" passHref>
          <li className="hover:text-green-600 cursor-pointer">Home</li>
        </Link>
        <Link href="/About" >
          <li className="hover:text-green-600 cursor-pointer">About</li>
        </Link>
        <Link href="/Services" >
          <li className="hover:text-green-600 cursor-pointer">Services</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </Link>
        <Link href="/Help" >
          <li className="hover:text-green-600 cursor-pointer">Help</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;