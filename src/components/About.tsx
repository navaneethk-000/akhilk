import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Flame, Clock, Users } from "lucide-react";

import img152 from "../assets/img152.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const images = [img1, img2, img3];

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
      },
    }),
  };

  const stats = [
    {
      icon: <Award size={32} className="text-[#E53935] mb-3" />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <Flame size={32} className="text-accent mb-3" />,
      value: "500+",
      label: "Clients Transformed",
    },
    {
      icon: <Clock size={32} className="text-[#E53935] mb-3" />,
      value: "2,000+",
      label: "Training Hours",
    },
    {
      icon: <Users size={32} className="text-[#E53935] mb-3" />,
      value: "25+",
      label: "Expert Certifications",
    },
  ];

  const certifications = [
    "Certified Personal Trainer (ACE)",
    "CPR & AED Certified",

    "Level 3 Certificate in Personal Training (UK)",
  ];

  return (
    <section id="about" className="section-spacing bg-surface" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-title"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={img152}
                alt="Professional Trainer"
                className="w-full h-[680px] object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 border-4 border-[#E53935] rounded-lg z-10 hidden md:block"></div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-[#E53935]">Akhil K</h3>
            <p className="text-xl font-barlow font-bold mb-3">
              Fitness Coach & Nutrition Expert
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experienced in designing personalized training programs and
              leading group sessions. Skilled in fitness assessments, nutrition
              guidance, and injury prevention. Known for building strong client
              relationships and promoting safe, effective workouts. Also
              supported gym operations, ensured safety protocols, and helped
              clients with proper form and equipment use.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you're looking to lose weight, build muscle, or improve
              athletic performance, my proven methods will get you there. I
              believe that fitness is not just about looking good—it's about
              feeling strong, confident, and capable in all areas of life.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-darkgray rounded-lg p-6 text-center"
              custom={index}
              variants={statsVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {stat.icon}
              <h4 className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-20 text-center"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Professional Certifications
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-r from-[#E53935] text-white px-5 py-2 rounded-full shadow-lg text-sm md:text-base font-medium whitespace-nowrap"
              >
                {cert}
              </motion.div>
            ))}
          </div>
          <div>
            <div className="flex items-center justify-center gap-10 mt-10 flex-wrap">
              {images.map((src, index) => (
                <motion.img
                  key={index}
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-[300px] h-[300px] object-cover border border-gray-500 shadow-white shadow-inner rounded-2xl cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
