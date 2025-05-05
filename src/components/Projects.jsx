
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/project';



export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'app', 'design', 'branding'];
  
    const filteredProjects =
      activeCategory === 'all'
        ? projectsData
        : projectsData.filter((project) => project.category === activeCategory);
  
   
    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                My Projects
              </h2>
              <div className="w-16 h-1 mx-auto mb-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                A collection of my latest work and creative endeavors
              </p>
            </div>
    
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2 rounded-full capitalize text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-600 dark:bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
               
                />
              ))}
            </div>
          </div>
    

        </section>
      );


  
}



