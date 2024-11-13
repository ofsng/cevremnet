// Çevrem.net Navbar Bileşeni - Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar p-4 shadow-md fixed w-full z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-blue-800' : 'bg-blue-600'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-200">
            Çevrem.net
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={`links flex-col lg:flex lg:flex-row lg:space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>          
          <Link to="/" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Ana Sayfa
          </Link>
          <Link to="/about" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Hakkımızda
          </Link>
          <Link to="/services" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Hizmetlerimiz
          </Link>
          <Link to="/contact" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            İletişim
          </Link>
          <Link to="/blog" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Blog
          </Link>
          <Link to="/login" className="hover:text-gray-200 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Giriş Yap
          </Link>
          <Link to="/register" className="cta-button bg-green-600 text-white py-1 px-4 rounded-lg hover:bg-green-700 mt-2 lg:mt-0 transition duration-300 ease-in-out">
            Üye Ol
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
