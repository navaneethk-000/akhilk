// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

// export const Contact: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const formVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   const infoVariants = {
//     hidden: { opacity: 0, x: 30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, delay: 0.2 },
//     },
//   };

//   const inputVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.1 * i,
//         duration: 0.4,
//       },
//     }),
//   };

//   return (
//     <section id="contact" className="section-spacing bg-background" ref={ref}>
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="section-title inline-block">CONTACT ME</h2>
//           <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
//             Ready to transform your fitness? Get in touch to book a session or
//             discuss your goals.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* <motion.div
//             variants={formVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

//             <form className="space-y-6">
//               <motion.div
//                 custom={1}
//                 variants={inputVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//               >
//                 <label
//                   htmlFor="name"
//                   className="block text-gray-300 mb-2 font-medium"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="input-field"
//                   placeholder="John Doe"
//                 />
//               </motion.div>

//               <motion.div
//                 custom={2}
//                 variants={inputVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//               >
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-300 mb-2 font-medium"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="input-field"
//                   placeholder="you@example.com"
//                 />
//               </motion.div>

//               <motion.div
//                 custom={3}
//                 variants={inputVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//               >
//                 <label
//                   htmlFor="service"
//                   className="block text-gray-300 mb-2 font-medium"
//                 >
//                   Interested In
//                 </label>
//                 <select id="service" className="input-field">
//                   <option value="" disabled selected>
//                     Select a service
//                   </option>
//                   <option value="personal-training">Personal Training</option>
//                   <option value="group-sessions">Group Sessions</option>
//                   <option value="nutrition-plan">Nutrition Plan</option>
//                   <option value="online-coaching">Online Coaching</option>
//                   <option value="custom">Custom Package</option>
//                 </select>
//               </motion.div>

//               <motion.div
//                 custom={4}
//                 variants={inputVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//               >
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-300 mb-2 font-medium"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="input-field"
//                   placeholder="Tell me about your fitness goals..."
//                 ></textarea>
//               </motion.div>

//               <motion.button
//                 custom={5}
//                 variants={inputVariants}
//                 initial="hidden"
//                 animate={inView ? "visible" : "hidden"}
//                 whileHover={{ scale: 1.03, boxShadow: "0 0 15px #00ff00" }}
//                 whileTap={{ scale: 0.97 }}
//                 className="btn-primary w-full flex items-center justify-center"
//               >
//                 <Send size={18} className="mr-2" />
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div> */}

//           <motion.div
//             variants={infoVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//             <div className="space-y-8">
//               <div className="flex items-start">
//                 <div className="bg-darkgray p-3 rounded-lg mr-4">
//                   <Phone size={20} className="text-[#E53935]" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Phone</h4>
//                   <p className="text-gray-300">+91 8129300495</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-darkgray p-3 rounded-lg mr-4">
//                   <Mail size={20} className="text-[#E53935]" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Email</h4>
//                   <p className="text-gray-300">akhilakhi678@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-darkgray p-3 rounded-lg mr-4">
//                   <MapPin size={20} className="text-[#E53935]" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Location</h4>
//                   <p className="text-gray-300">
//                     Pranavam,(PO) Edakkad
//                     <br />
//                     Kannur, Kerala
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="bg-darkgray p-3 rounded-lg mr-4">
//                   <Clock size={20} className="text-[#E53935]" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold mb-1">Hours</h4>
//                   <p className="text-gray-300">
//                     Monday - Friday: 5am - 9pm
//                     <br />
//                     Saturday: 8am - 6pm
//                     <br />
//                     Sunday: 10am - 4pm
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10">
//               <h4 className="font-bold mb-4">Follow Me</h4>
//               <div className="flex space-x-4">
//                 {/* <motion.a
//                   href="#"
//                   className="bg-darkgray text-white hover:text-primary p-3 rounded-full transition-colors duration-300"
//                   whileHover={{ scale: 1.1, boxShadow: "0 0 10px #00ff00" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                   </svg>
//                 </motion.a> */}
//                 <motion.a
//                   href="#"
//                   className="bg-darkgray text-white hover:text-[#E53935] p-3 rounded-full transition-colors duration-300"
//                   whileHover={{ scale: 1.1, boxShadow: "0 0 10px #E53935" }}
//                 >
//                   <a href="https://www.instagram.com/_a_akhi?igsh=d3RqNW9tMm94cGNn">
//                     <svg
//                       xmlns="https://www.instagram.com/_a_akhi?igsh=d3RqNW9tMm94cGNn"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <rect
//                         x="2"
//                         y="2"
//                         width="20"
//                         height="20"
//                         rx="5"
//                         ry="5"
//                       ></rect>
//                       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                       <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                     </svg>
//                   </a>
//                 </motion.a>
//                 {/* <motion.a
//                   href="#"
//                   className="bg-darkgray text-white hover:text-primary p-3 rounded-full transition-colors duration-300"
//                   whileHover={{ scale: 1.1, boxShadow: "0 0 10px #00ff00" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </motion.a> */}
//                 <motion.a
//                   href="#"
//                   className="bg-darkgray text-white hover:text-[#E53935] p-3 rounded-full transition-colors duration-300"
//                   whileHover={{ scale: 1.1, boxShadow: "0 0 10px #E53935" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                     <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                   </svg>
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

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
            Ready to transform your fitness? Get in touch to book a session or
            discuss your goals.
          </p>
        </motion.div>

        <motion.div
          variants={infoVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-[#1e1e1e] rounded-2xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>

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
                  Pranavam, (PO) Edakkad<br />
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
                  Monday - Friday: 5am - 9pm<br />
                  Saturday: 8am - 6pm<br />
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
