import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import backgroundImg from '../assets/backgroundImg.jpg'
import imgAbout from '../assets/image_1.jpg'
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"

interface Transformation {
  id: number;
  clientName: string;
  timeFrame: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const Transformations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const transformations: Transformation[] = [
    {
      id: 1,
      clientName: "Akhil K.",
      timeFrame: "12 Weeks",
      beforeImage: img2,
      // beforeImage: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600",
      // afterImage: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      afterImage: imgAbout,
      description: "Lost 30 pounds and gained significant muscle mass following my 12-week strength and conditioning program."
    },
    {
      id: 2,
      clientName: "Sarah T.",
      timeFrame: "16 Weeks",
      beforeImage: img3,
      afterImage:img2,
      description: "Transformed her physique and improved her strength dramatically through consistent training and nutrition."
    },
    {
      id: 3,
      clientName: "David J.",
      timeFrame: "20 Weeks",
      beforeImage: img2,
      afterImage:img3,
      description: "Went from skinny to muscular with a customized bulking program and nutrition plan."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTransformation = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % transformations.length);
  };

  const prevTransformation = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + transformations.length) % transformations.length);
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [direction, setDirection] = useState(0);

  return (
    <section id="transformations" className="section-spacing bg-surface" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block">CLIENT TRANSFORMATIONS</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Real results from real clients. These transformations showcase what's possible 
            with dedication, expert guidance, and consistent effort.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  setDirection(1);
                  nextTransformation();
                } else if (swipe > swipeConfidenceThreshold) {
                  setDirection(-1);
                  prevTransformation();
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="relative">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <div className="absolute top-3 left-3 z-10 bg-primary text-black px-2 py-1 rounded font-bold text-sm">BEFORE</div>
                  <img 
                    src={transformations[activeIndex].beforeImage} 
                    alt={`${transformations[activeIndex].clientName} Before`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
                  <div className="absolute top-3 left-3 z-10 bg-primary text-black px-2 py-1 rounded font-bold text-sm">AFTER</div>
                  <img 
                    src={transformations[activeIndex].afterImage} 
                    alt={`${transformations[activeIndex].clientName} After`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 bg-darkgray p-6 rounded-lg mt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{transformations[activeIndex].clientName}</h3>
                    <p className="text-primary font-semibold">{transformations[activeIndex].timeFrame} Transformation</p>
                  </div>
                  <div className="flex gap-3">
                    {transformations.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block h-2 w-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-500'}`}
                      ></span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{transformations[activeIndex].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <motion.button
            className="absolute top-1/3 -left-4 md:-left-12 bg-primary rounded-full p-2 text-black"
            whileHover={{ scale: 1.1, backgroundColor: "#00dd00" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(-1);
              prevTransformation();
            }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            className="absolute top-1/3 -right-4 md:-right-12 bg-primary rounded-full p-2 text-black"
            whileHover={{ scale: 1.1, backgroundColor: "#00dd00" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(1);
              nextTransformation();
            }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};