import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

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
      price: "3000",
      period: "8 sessions",
      description: "Best for beginners, home workouts & building consistency",
      features: [
        "8 Live Sessions",
        "45 minutes/session",
        "Mode: Online (WhatsApp / Zoom / Google Meet)",
        "Customized Workout Plan",
        "Basic Diet Guidance",
        "Weekly Check-ins",
      ],
      highlight: false,
    },
    {
      id: 2,
      name: "Premium",
      price: "5000",
      period: "16 sessions",
      description:
        "Perfect for fat loss, posture correction, and intermediates",
      features: [
        "16 Live Sessions",
        "45–60 minutes/session",
        "Mode: Online",
        "Fully Customized Workouts (Home/Gym)",
        "Personalized Diet Guidelines",
        "Weekly Progress Tracking",
        "Flexible Scheduling",
      ],
      highlight: true,
    },
    {
      id: 3,
      name: "Elite",
      price: "7500",
      period: "24 sessions",
      description:
        "Ideal for long-term transformation with personalized support",
      features: [
        "24 Live Sessions",
        "60 minutes/session",
        "Mode: Online",
        "Advanced Training Programs",
        "Detailed Nutrition Guidance",
        "Daily WhatsApp Support",
        "Form Correction Feedback (Video Reviews)",
        "Progress Tracking Every Week",
      ],
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
            Invest in your health and fitness with training packages designed to
            deliver maximum results at different commitment levels.
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
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
              whileHover={{ y: -10 }}
            >
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlight ? "text-[#E53935]" : "text-white"
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-4">
                <span className="text-4xl font-bold">&#8377;{plan.price}</span>
                <span className="text-gray-400 ml-1">({plan.period})</span>
              </div>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Check
                      size={18}
                      className="text-[#E53935] mt-1 mr-2 flex-shrink-0"
                    />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};