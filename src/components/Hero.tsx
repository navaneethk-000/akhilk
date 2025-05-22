import React from "react";
import { motion } from "framer-motion";
import backgroundImg from "../assets/backgroundImg.jpg";
import imgAbout from "../assets/image_1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img15 from '../assets/img15.png'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img121 from '../assets/img121.jpg'
import img14 from '../assets/img14.jpg'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${img15})`,
        // backgroundImage: "url('https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:max-w-2xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-barlow font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            TRANSFORM YOUR <span className="text-[#E53935]">BODY</span>
            <br />
            UNLEASH YOUR <span className="text-[#E53935]">POWER</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert personal training tailored to your goals and fitness level.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* <motion.button 
              className="btn-primary text-lg mr-4 "
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ff00' }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ['0 0 0px #00ff00', '0 0 10px #00ff00', '0 0 0px #00ff00'],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
              }}
            >
              Book a Session
            </motion.button> */}

            {/* <motion.button 
              className="btn-secondary text-lg mt-4 md:mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};
