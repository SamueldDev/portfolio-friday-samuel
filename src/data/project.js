



// No need to import ReactNode or define types in JavaScript

import averyBrand3 from "../assets/avery-brand3.png"
import storefront from "../assets/storefront.png"
import study from "../assets/study.png"
import movieverse from "../assets/movieverse.png"

export const projectsData = [
    {
      id: 1,
      title: 'Consultant Brand Site',
      category: 'branding',
      image: averyBrand3,
      shortDescription: 'A sleek, responsive website for a business consultant to showcase services, testimonials, and blog content. it highlights clarity, trust, and personal branding..',
      description: 'A sleek, responsive website for a business consultant to showcase services, testimonials, and blog content. Built with React and Tailwind CSS, it highlights clarity, trust, and personal branding.',
      technologies: ['React', 'Tailwind CSS', 'React Router', 'Vite',],
      liveUrl: 'https://consultant-brand-site.netlify.app/',
      githubUrl: 'https://github.com/example',
      date: 'January 2023',
      moreImages: [
        'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 2,
      title: 'Ecommerce Storefront',
      category: 'branding',
      image: storefront,
      shortDescription: 'A modern and user-friendly eCommerce storefront featuring dynamic product displays, interactive cart functionality, and a streamlined checkout experience — designed to provide a smooth shopping journey from start to finish.',
      description: 'A modern and user-friendly eCommerce storefront featuring dynamic product displays, interactive cart functionality, and a streamlined checkout experience — designed to provide a smooth shopping journey from start to finish.',
      technologies: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'React Context API'],
      liveUrl: 'https://ecommerce-site-sam.netlify.app/',
      githubUrl: 'https://github.com/example',
      date: 'March 2023'
    },
    {
      id: 3,
      title: 'AI_Study_Companion_App',
      category: 'app',
      image: study,
      shortDescription: 'AI Study Companion is a smart learning tool that uses AI to turn study materials into notes, quizzes, and flashcards. Users can save topics, manage flashcards, and securely log in or delete their accounts.',
      description: 'AI Study Companion is a smart learning tool that uses AI to turn study materials into notes, quizzes, and flashcards. Users can save topics, manage flashcards, and securely log in or delete their accounts.',
      technologies: ['React', 'Vite', 'Firebase', 'Auth', 'React Router', 'Tailwind CSS'],
      liveUrl: 'https://ai-study-companion.netlify.app/',
      date: 'May 2023',
      moreImages: [
        'https://images.pexels.com/photos/7249188/pexels-photo-7249188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 4,
      title: 'Movie App',
      category: 'app',
      image: movieverse,
      shortDescription: 'A responsive React app displaying trending movies with real-time search and detailed pages, showcasing expertise in API integration and modern frontend development.',
      description: 'A responsive React app displaying trending movies with real-time search and detailed pages, showcasing expertise in API integration and modern frontend development..',
      technologies: ['Vite', 'API', 'React', 'Tailwind CSS'],
      liveUrl: 'https://chimerical-sopapillas-54878a.netlify.app/',
      date: 'July 2023'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'design',
      image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      shortDescription: 'A mobile app for tracking workouts, nutrition, and fitness goals.',
      description: 'This fitness tracking application helps users monitor their exercise routines, nutrition intake, and progress toward fitness goals. Features include workout planning and logging, nutrition tracking, progress visualization, personalized recommendations, and social sharing capabilities. The app integrates with wearable devices to gather accurate health data and provide comprehensive fitness insights.',
      technologies: ['Flutter', 'Firebase', 'GraphQL', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      date: 'September 2023'
    },
    {
      id: 6,
      title: 'Educational Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      shortDescription: 'An interactive learning platform with courses and assessments.',
      description: 'This educational platform offers a comprehensive learning environment with course content, interactive exercises, assessments, and progress tracking. The platform includes features like video lectures, interactive quizzes, discussion forums, assignment submission, and certification generation. The design focuses on creating an engaging and distraction-free learning experience that adapts to different learning styles and device types.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'AWS'],
      liveUrl: 'https://example.com',
      date: 'November 2023',
      moreImages: [
        'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8471986/pexels-photo-8471986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  ];
  