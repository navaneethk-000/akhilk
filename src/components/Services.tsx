import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, User, Utensils, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="service-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 0 15px #E53935'
      }}
    >
      <div className="mb-4 text-[#E53935]">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <motion.div 
        className="flex items-center text-primary"
        whileHover={{ x: 5 }}
      >
        {/* <span className="mr-2 font-bold">Learn More</span> */}
        {/* <ArrowRight size={16} /> */}
      </motion.div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <User size={40} />,
      title: "Personal Training",
      description: "One-on-one training sessions customized to your specific goals, fitness level, and schedule.",
    },
    {
      icon: <Users size={40} />,
      title: "Group Sessions",
      description: "High-energy group workouts that combine strength training, cardio, and functional movements.",
    },
    {
      icon: <Utensils size={40} />,
      title: "Nutrition Plans",
      description: "Comprehensive nutrition guidance tailored to support your fitness goals and lifestyle.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 2v5" /><path d="M8 2v5" /><path d="M2 12h20" /></svg>,
      title: "Online Coaching",
      description: "Remote training programs with regular check-ins, video analysis, and ongoing support.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="services" className="section-spacing bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block">SERVICES</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Elite training programs designed to transform your physique and improve your 
            performance, no matter your starting point.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};