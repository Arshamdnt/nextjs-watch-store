import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-white text-xl font-semibold">
            لوگو
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-yellow-400 transition font-medium">درباره</a>
            <a href="#" className="text-white hover:text-yellow-400 transition font-medium">مقایسه</a>
            <a href="#" className="text-white hover:text-yellow-400 transition font-medium">خانه</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

