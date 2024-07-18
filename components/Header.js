"use client";
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Nexcent Logo" className="h-10 w-10" />
          <span className="ml-3 text-xl font-bold">Nexcent</span>
        </div>
        {/* Large Screen Navigation */}
        <nav className="hidden space-x-6 lg:flex">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Feature</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Product</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Testimonial</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        {/* Large Screen Login and Sign Up */}
        <div className="hidden space-x-4 lg:flex">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600">Menu</button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white py-4 px-6">
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Home</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Service</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Feature</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Product</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Testimonial</a>
          <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">FAQ</a>
          {/* Mobile Login and Sign Up */}
          <div className="mt-4 flex justify-between">
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
