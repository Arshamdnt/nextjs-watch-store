"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inTheBasket,setinTheBasket] = useState([]);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5">
        <div className="flex items-center justify-between h-16">

          {/* لینک‌ها در دسکتاپ */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-yellow-200 transition font-medium">خانه</Link>
            <Link href="/comparison" className="text-white hover:text-yellow-200 transition font-medium">مقایسه</Link>
            <Link href="/about" className="text-white hover:text-yellow-200 transition font-medium">درباره</Link>
          </div>

          {/* آیکون‌ها در موبایل: همبرگر اول، سپس سبد خرید */}
          <div className="flex md:hidden items-center space-x-4">
           
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-yellow-400/20 transition-all duration-300 focus:outline-none"
            >
              {menuOpen ? <CloseIcon className="text-white w-6 h-6" /> : <MenuIcon className="text-white w-6 h-6" />}
            </button>

            {/* سبد خرید */}
            <div className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-yellow-400/20 transition-all duration-300 cursor-pointer">
              <ShoppingBasketIcon className="text-white w-6 h-6" />
            </div>
          </div>

          {/* آیکون سبد خرید در دسکتاپ */}
          <div className="hidden md:flex bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-yellow-400/20 transition-all duration-300 cursor-pointer">
            <ShoppingBasketIcon className="text-white w-6 h-6" />
          </div>
        </div>
      </div>

      {/* منوی موبایل زیبا و با آیکون */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 w-48 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden animate-fadeIn">
          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-white/30 transition"
            onClick={() => setMenuOpen(false)}
          >
            <HomeIcon className="text-white w-5 h-5 mr-2" />
            <span className="text-white font-medium">خانه</span>
          </Link>
          <Link
            href="/comparison"
            className="flex items-center px-4 py-2 hover:bg-white/30 transition"
            onClick={() => setMenuOpen(false)}
          >
            <CompareArrowsIcon className="text-white w-5 h-5 mr-2" />
            <span className="text-white font-medium">مقایسه</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center px-4 py-2 hover:bg-white/30 transition"
            onClick={() => setMenuOpen(false)}
          >
            <InfoIcon className="text-white w-5 h-5 mr-2" />
            <span className="text-white font-medium">درباره</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




