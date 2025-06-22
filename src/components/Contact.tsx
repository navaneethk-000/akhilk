import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-background text-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            DM now to book your FREE consultation and choose your perfect plan!
          </p>
        </motion.div>

        <motion.div
          variants={infoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-[#1e1e1e] rounded-2xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Contact Information
          </h3>

          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2a2a2a] p-3 rounded-lg">
                <Phone size={20} className="text-[#E53935]" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-300">+91 8129300495</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2a2a2a] p-3 rounded-lg">
                <Mail size={20} className="text-[#E53935]" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-300">akhilakhi678@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2a2a2a] p-3 rounded-lg">
                <MapPin size={20} className="text-[#E53935]" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-300">
                  Edakkad
                  <br />
                  Kannur, Kerala
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-[#2a2a2a] p-3 rounded-lg">
                <Clock size={20} className="text-[#E53935]" />
              </div>
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-300">
                  Monday - Friday: 5am - 9pm
                  <br />
                  Saturday: 8am - 6pm
                  <br />
                  Sunday: 10am - 4pm
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <h4 className="font-semibold mb-4 text-center">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/_a_akhi?igsh=d3RqNW9tMm94cGNn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a2a2a] text-white p-3 rounded-full transition duration-300 hover:text-[#E53935]"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px #E53935" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                className="bg-[#2a2a2a] text-white p-3 rounded-full transition duration-300 hover:text-[#E53935]"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px #E53935" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
