

import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react';


import emailjs from '@emailjs/browser';



const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email Me',
      value: 'fridaysamuel508@gmail.com',
      link: 'mailto:fridaysamuel508@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Call Me',
      value: '+2348141796762',
      link: 'tel:+2348141796762'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Availability',
      value: 'Remote | Flexible Time Zone'
    }
  ];


  const socialLinks = [
    {
      href: '#',
      label: 'Twitter',
      iconPath:
        'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.531A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.266 0-4.102 1.835-4.102 4.102 0 .322.036.635.106.935C8.728 8.87 6.1 7.377 4.326 5.104a4.084 4.084 0 0 0-.555 2.063c0 1.422.724 2.675 1.825 3.411a4.095 4.095 0 0 1-1.858-.513v.052a4.104 4.104 0 0 0 3.292 4.02 4.1 4.1 0 0 1-1.853.07 4.107 4.107 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407 11.616 11.616 0 0 0 8.29 20.25z'
    },
    {
      href: '#',
      label: 'LinkedIn',
      iconPath:
        'M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.44 18.39H5.5V9h2.94v9.39zM6.97 7.74C6.17 7.74 5.5 7.06 5.5 6.27c0-.79.67-1.47 1.47-1.47.79 0 1.47.67 1.47 1.47 0 .79-.67 1.47-1.47 1.47zm11.43 10.65h-2.94v-4.67c0-1.11-.02-2.55-1.55-2.55-1.55 0-1.79 1.21-1.79 2.47v4.75h-2.94V9h2.82v1.28h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.52 1.96 3.52 4.51v5.13z'
    },
    {
      href: '#',
      label: 'GitHub',
      iconPath:
        'M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.66-.22.66-.49v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.67-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.51 9.51 0 0 1 12 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.67 0 3.85-2.34 4.7-4.57 4.95.36.31.69.91.69 1.84v2.73c0 .27.17.58.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z'
    },
    {
      href: '#',
      label: 'Instagram',
      iconPath:
        'M12.315 2c2.4 0 2.687.01 3.63.052 1.17.054 1.97.24 2.427.41a4.92 4.92 0 0 1 1.79 1.163 4.918 4.918 0 0 1 1.163 1.79c.17.457.356 1.256.41 2.427.043.943.052 1.23.052 3.63s-.01 2.687-.052 3.63c-.054 1.17-.24 1.97-.41 2.427a4.93 4.93 0 0 1-1.163 1.79 4.926 4.926 0 0 1-1.79 1.163c-.457.17-1.256.356-2.427.41-.943.043-1.23.052-3.63.052s-2.687-.01-3.63-.052c-1.17-.054-1.97-.24-2.427-.41a4.928 4.928 0 0 1-1.79-1.163 4.927 4.927 0 0 1-1.163-1.79c-.17-.457-.356-1.256-.41-2.427C2.01 14.687 2 14.4 2 12s.01-2.687.052-3.63c.054-1.17.24-1.97.41-2.427A4.92 4.92 0 0 1 3.625 4.153 4.92 4.92 0 0 1 5.415 2.99c.457-.17 1.256-.356 2.427-.41C8.687 2.01 8.974 2 11.374 2h.941zm-.315 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm5.5-11.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z'
    }
  ];
  



export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
      if (!formData.message.trim()) newErrors.message = 'Message is required';
      else if (formData.message.length < 10) newErrors.message = 'Min 10 characters';
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      setIsSubmitting(true);
      
    
      try {
      
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
       
    
        await emailjs.send(serviceID, templateID, formData, {
          publicKey,
        });
    
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch  {
        alert("Something went wrong. Please try again later")
      } finally {
        setIsSubmitting(false);
      }
    };
    


    return (
    
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
          
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
              <div className="w-16 h-1 mx-auto bg-blue-600 dark:bg-blue-400 rounded mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">Let's discuss your project and bring your ideas to life</p>
            </div>
    
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="w-full lg:w-1/3 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map(({ icon, title, value, link }) => (
                    <div className="flex items-start" key={title}>
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
                        {icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                        {link ? (
                          <a href={link} className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
                            {value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
    
                <div className="mt-10">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ href, label, iconPath }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={iconPath} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
    
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="w-full lg:w-2/3 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl space-y-6">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                    {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded disabled:opacity-60 transition"
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitSuccess && <p className="text-green-500">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </section>
      );

 
}



