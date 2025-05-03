



import React from 'react'
import { skillsData } from '../data/skills';

export default function Skills() {
 
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Skills & Services
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Specialized skills and services I offer to help your business succeed
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skillsData.map((skill) => (
                <div 
                  key={skill.id} 
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mb-6">
                    <skill.icon />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );


}
