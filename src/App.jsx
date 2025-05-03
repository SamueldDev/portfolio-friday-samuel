


// import React from 'react'

// import './App.css'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'

// import Projects from './components/Projects'
// import Skills from './components/Skills'

// function App() {

//   return (
//     <>
      

//       <Navbar />  
//        <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />

//       <Footer />
      
    
//       {/* Add blob animation classes */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           25% {
//             transform: translate(20px, -30px) scale(1.1);
//           }
//           50% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           75% {
//             transform: translate(30px, 30px) scale(1.05);
//           }
//         }
        
//         .animate-blob {
//           animation: blob 10s infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>  
      
      
//     </>
//   )
// }

// export default App

































// // import React, { useState, useEffect } from 'react';


// // import { getInitialTheme, setThemeClass } from './utils/theme';










































































import React from 'react'

import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      {/* Global animation styles */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 30px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 10s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
}

export default App
