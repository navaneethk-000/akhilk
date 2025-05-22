import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ChevronUp, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-9">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AK . All rights reserved.
          </p>
          {/* <div className="flex space-x-4">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Cookie Policy</a>
          </div> */}
        </div>
      {/* <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell size={32} className="text-primary" />
              <span className="font-barlow text-2xl font-bold">FITFORCE</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional personal training services to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, color: '#00ff00' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, color: '#00ff00' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, color: '#00ff00' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, color: '#00ff00' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#transformations" className="text-gray-400 hover:text-primary transition-colors duration-300">Transformations</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition-colors duration-300">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Personal Training</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Group Sessions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Nutrition Plans</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Online Coaching</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors duration-300">Corporate Wellness</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for the latest fitness tips and exclusive offers.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  className="input-field rounded-r-none"
                  placeholder="Your email address"
                />
                <motion.button
                  className="bg-primary text-black font-bold py-3 px-4 rounded-r-md"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 10px #00ff00' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">By subscribing, you agree to our Privacy Policy.</p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FitForce Training. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div> */}
      
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#E53935] text-black p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: '0 0 15px #E53935' }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </footer>
  );
};