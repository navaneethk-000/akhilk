import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: "Starter",
      price: "$49",
      period: "per session",
      description: "Perfect for those just beginning their fitness journey",
      features: [
        "1-on-1 training session",
        "Fitness assessment",
        "Basic nutrition tips",
        "Email support",
        "Access to training app"
      ],
      highlight: false
    },
    {
      id: 2,
      name: "Premium",
      price: "$199",
      period: "per month",
      description: "Our most popular package for serious results",
      features: [
        "8 training sessions per month",
        "Comprehensive fitness assessment",
        "Personalized nutrition plan",
        "24/7 messaging support",
        "Progress tracking",
        "Monthly check-in and plan adjustment",
        "Access to premium app features"
      ],
      highlight: true
    },
    {
      id: 3,
      name: "Elite",
      price: "$499",
      period: "per month",
      description: "The ultimate transformation package",
      features: [
        "Unlimited training sessions",
        "Advanced body composition analysis",
        "Custom meal plans with recipes",
        "24/7 priority support",
        "Recovery protocols",
        "Weekly check-ins and adjustments",
        "Access to exclusive workshops",
        "Home workout equipment kit"
      ],
      highlight: false
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="pricing" className="section-spacing bg-surface" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block">PRICING PLANS</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Invest in your health and fitness with training packages designed to deliver 
            maximum results at different commitment levels.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              whileHover={{ 
                y: -10, 
                // boxShadow: plan.highlight ? '0 0 20px rgba(0, 255, 0, 0.4)' : '0 10px 25px rgba(0,0,0,0.2)' 
              }}
            >
              {/* {plan.highlight && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-black font-bold text-sm py-1 px-4 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )} */}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-[#E53935]' : 'text-white'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <Check size={18} className="text-[#E53935] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button
                className={plan.highlight ? "btn-primary w-full" : "btn-secondary w-full"}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: plan.highlight ? '0 0 15px #E53935' : '0 0 5px #E53935' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 bg-darkgray p-8 rounded-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I also offer custom training packages to meet your specific needs and goals. 
            Contact me for a free consultation to discuss your requirements.
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px #E53935' }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Plan
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};