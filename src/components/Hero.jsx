

import React from 'react'

export default function Hero() {
    const scrollToContact = () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
    
          <div className="container px-4 mx-auto z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Freelance Web Developer
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Frontend <span className="text-blue-600 dark:text-blue-400">Magic</span> for Fast Growing Brands
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              I design and develop sleek, high-performance websites using React and Tailwind — built to scale with your business and impress your users.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Let's work together
                </button>
                <a
                  href="#projects"
                  className="px-8 py-4 text-lg font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View my work
                </a>
              </div>
            </div>
          </div>
        </section>
      );
    };
    


