

import React from 'react'
import me from "../assets/me.png"

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                About Me
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Get to know more about me and my journey as a web developer
              </p>
            </div>
    
            <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
              <div className="w-full md:w-2/5">
                <div className="relative">
                  <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img 
                      src={me}
                      alt="Professional developer working" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-lg -z-10"></div>
                </div>
              </div>
    
              <div className="w-full md:w-3/5">
                {/* <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Passionate Web Developer & UI/UX Enthusiast
                </h3> */}

                <h3 className="text-2xl font-bold mb-2">Turning Ideas into Beautiful, Usable Websites</h3>
                {/* <p className="text-gray-500 mt-2">
                Frontend developer focused on performance, clean UI, and smooth user experiences.
                </p> */}


                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                👋 Hey, I’m Samuel — a freelance web developer with experience helping brands and startups turn ideas into fast, responsive, and conversion-focused websites.

                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                💻 I specialize in frontend development using React, TailwindCSS, and modern JavaScript — building interfaces that not only look beautiful, but also perform exceptionally well across all devices. I’m also comfortable working across the full stack when needed.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                🚀 Whether you're launching a new product, refreshing your online presence, or scaling your startup, I bring both technical skill and a user-first mindset to the table. Clean code, smooth animations, SEO best practices — all part of the package.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                ⚡ What sets me apart? I move fast, communicate clearly, and know how to leverage the latest tools to speed up delivery without compromising quality.

                Let’s build something awesome together.
                </p>
                
    
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Name:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Friday Samuel</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email:</h4>
                    <p className="text-gray-600 dark:text-gray-300">fridaysamuel508@gmail.com</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Remote (GMT+1 / Flexible)</p>
                  </div>


                  <div>

                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability:</h4>
                    <p className="text-gray-600 dark:text-gray-300">Freelance / Contract</p>
                  </div>
                </div>
    
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
  )
}
