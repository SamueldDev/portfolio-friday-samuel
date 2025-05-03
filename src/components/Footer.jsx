

// import React from 'react'

// export default function Footer() {
//     const currentYear = new Date().getFullYear();

  
//     return (
//         <footer className="bg-gray-900 dark:bg-black text-white py-16">
//           <div className="container px-4 mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//               <div className="col-span-1 md:col-span-2">
//                 <h2 className="text-xl font-bold mb-4 text-white">DevPortfolio</h2>
//                 <p className="text-gray-400 mb-6 max-w-md">
//                   Crafting exceptional digital experiences that help businesses
//                   achieve their goals and connect with their audience.
//                 </p>
//                 <div className="flex space-x-4">
//                   {/* Social Icons */}
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547..." />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M19 0h-14c-2.761..." />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2..." />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0..." />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
    
//               {/* Quick Links */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
//                 <ul className="space-y-3">
//                   {['home', 'about', 'projects', 'skills', 'contact'].map((id) => (
//                     <li key={id}>
//                       <a
//                         href={`#${id}`}
//                         className="text-gray-400 hover:text-white transition-colors duration-200"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
//                         }}
//                       >
//                         {id.charAt(0).toUpperCase() + id.slice(1)}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
    
//               {/* Services */}
//               <div>
//                 <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
//                 <ul className="space-y-3">
//                   <li>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                       Web Development
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                       UI/UX Design
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                       Responsive Design
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
    
//             <div className="text-center text-gray-500 mt-10">
//               &copy; {currentYear} DevPortfolio. All rights reserved.
//             </div>
//           </div>
//         </footer>
//       );


// }















































































import React from 'react';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4 text-white">DevPortfolio</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting exceptional digital experiences that help businesses
              achieve their goals and connect with their audience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['home', 'about', 'projects', 'skills', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Responsive Design
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10">
          &copy; {currentYear} Samuel. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

