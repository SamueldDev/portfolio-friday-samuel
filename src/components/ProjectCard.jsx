

import React from 'react'
import { ExternalLink } from 'lucide-react';


export default function ProjectCard({ project, onClick}) {
 

    return (
        <div 
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          onClick={onClick}
        >
          <div className="relative h-64 overflow-hidden group cursor-pointer">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="p-6 w-full">
                <p className="text-white text-sm font-medium mb-2">{project.category.toUpperCase()}</p>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="View live site"
              >
                <ExternalLink size={16} />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      );
}


