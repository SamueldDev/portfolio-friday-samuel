

import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react';


export default function Navbar() {


    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navLinks = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ];
  
    const scrollToSection = (sectionId) => {
      setIsOpen(false);
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
 
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  Samuel.
                </a>
              </div>
              
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex space-x-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                
              </div>
              
              <div className="flex md:hidden items-center">
                
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      );


}








