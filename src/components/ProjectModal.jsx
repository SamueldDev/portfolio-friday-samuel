

import React, { useEffect, useRef } from 'react'
import { X, Globe, Github, ExternalLink } from 'lucide-react';



export default function ProjectModal( { project, isOpen, onClose }) {
  
    const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              {project.category.toUpperCase()}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              {project.date}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Globe size={18} />
              Live Preview
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg transition-all duration-200"
              >
                <Github size={18} />
                View Code
              </a>
            )}
          </div>
        </div>

        {project.moreImages && project.moreImages.length > 0 && (
          <div className="px-6 md:px-8 pb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              More Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.moreImages.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );



}
