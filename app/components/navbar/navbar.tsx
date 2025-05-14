"use client"
import Link from 'next/link';
import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex space-x-6">
            
            <Link href="/" className="text-white hover:text-yellow-200 transition font-medium">خانه</Link>
            <Link href="comparison" className="text-white hover:text-yellow-200 transition font-medium">مقایسه</Link>
            <Link href='about'  className="text-white hover:text-yellow-200 transition font-medium"> درباره</Link>
          </div>
              <div className="bg-white/2 backdrop-blur-md rounded-full p-2 hover:bg-yellow-400/20 transition-all duration-300 cursor-pointer ">
                  <ShoppingBasketIcon className="text-white" />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

