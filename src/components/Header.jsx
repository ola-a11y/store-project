import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../assets/logo.png';
import shopping from '../assets/online-shopping.png';
import close from '../assets/close.png';
import { useCart } from '../context/CartContext'; 

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  const navLinks = [
    { label: 'Collections', href: '#products' },
    { label: 'Brands', href: '#products' },
    { label: 'New', href: '#products' },
    { label: 'Sales', href: '#reviews' },
    { label: 'ENG', href: '#' },
  ];

  // Logic to close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const { cartItems } = useCart();

  return (
    <header className="flex items-center justify-between px-6">
      
      {/* Logo + Title */}
      <Link to="/" aria-label="Amazon Homepage" className="flex items-center  focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1">
        <img src={Logo} alt="" className="w-10" /> 
        <span className="text-lg font-semibold">NATURE'S GLOW</span>
      </Link>

      {/* Navigation Menu */}
      <nav>
        <ul
          ref={menuRef}
          className={`
            flex flex-col absolute right-0 top-0 h-full z-50
            bg-[#F9F8F4] p-6 items-center gap-4 
            w-3/4 sm:w-1/2
            transition-all duration-500 ease-in-out
            ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 invisible'}
            lg:static lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:gap-6 lg:w-auto lg:p-0
            lg:translate-x-0 lg:opacity-100 lg:visible
          `}
        >
          {/* Mobile Search */}
          <li className="py-[15px] lg:hidden w-full">
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-full rounded-md text-sm focus:outline-none border border-gray-500"
            />
            <button className="text-sm mt-2 w-full bg-black text-white py-2 px-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
              Search
            </button>
          </li>
          
          <li className="lg:hidden w-full"><hr className="border-gray-700"/></li>

          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-center lg:w-auto">
              <a 
                href={link.href} 
                className="
                  hover:text-black lg:hover:text-[#8D6E63]
                  duration-300 p-2 block lg:p-1
                  text-xl lg:text-base 
                  focus:outline-none focus:ring-2 focus:ring-black lg:focus:ring-blue-500 rounded"
                onClick={() => setMenuOpen(false)}  
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Desktop Search */}
          <li className="hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-[112px] rounded-md text-xs focus:outline-none border border-gray-400"
            />
          </li>

          {/* Shopping Icon */}
          <li className="relative"> 
            <Link 
              to="/cart" 
              aria-label="Shopping cart" 
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1 block"
            >
              <img src={shopping} alt="" className="w-8 pb-2" />
            </Link>
          
            {cartItems.length > 0 && (
              <span 
                className="absolute top-0 right-[-5px] bg-[#8D6E63] text-white 
                           text-xs font-bold rounded-full w-4 h-4 
                           flex items-center justify-center"
              >
                {cartItems.length}
              </span>
            )}

          </li>

          {/* Close Button - Mobile only */}
          <li className="lg:hidden pt-7 w-full flex justify-end">
            <button
              type="button"
              className="duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black rounded"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <img src={close} alt="" className='w-7'/>
            </button>
          </li>
        </ul>
      </nav>

      {/* Toggle Button - Small Screens */}
      <button
        className="lg:hidden text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;