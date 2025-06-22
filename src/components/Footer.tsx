import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-surface pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-center items-center md:mx-9">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AK . All rights reserved.
        </p>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#E53935] text-black p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1, boxShadow: "0 0 15px #E53935" }}
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