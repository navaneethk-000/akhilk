import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Wilson",
      position: "Marathon Runner",
      quote: "Working with John has completely transformed my running performance. His specialized training program helped me shave 15 minutes off my marathon time!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      position: "Tech Executive",
      quote: "Despite my busy schedule, John found ways to make fitness work for me. His nutrition advice and efficient workout plans have been game-changers.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      position: "New Mom",
      quote: "After having my baby, I thought I'd never get back in shape. John created a postpartum program that was safe, effective, and fit into my new life as a mom.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="section-spacing bg-background" ref={ref}>
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} 
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block">CLIENT TESTIMONIALS</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Hear what my clients have to say about their fitness journey and results.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="testimonial-card"
              whileHover={{ y: -10, boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}
            >
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonial.rating ? "text-[#E53935] fill-[#E53935] inline-block mr-1" : "text-gray-500 inline-block mr-1"} 
                  />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-[#E53935] text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #E53935' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Testimonials
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};