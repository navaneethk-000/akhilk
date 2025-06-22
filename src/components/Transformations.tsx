import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight, ChevronLeft } from "lucide-react";

import athul1After from "../assets/Athul1_after.jpg";
import athul1Before from "../assets/Athul1_before.jpg";
import athul2before from "../assets/Athul2_before.jpg";
import athul2after from "../assets/Athul2_after.jpg";
import navaneethdkBefore from "../assets/navaneethdk_before.jpg";
import navaneethdkAfter from "../assets/navaneethdk_after.jpg";
import sunithBefore from "../assets/sunithpk_before.jpg";
import sunithAfter from "../assets/sunithpk_after.jpg";

interface Transformation {
  id: number;
  clientName: string;
  timeFrame: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const Transformations: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const transformations: Transformation[] = [
    {
      id: 1,
      clientName: "Navaneeth DK",
      timeFrame: "20 Weeks",
      beforeImage: navaneethdkBefore,
      afterImage: navaneethdkAfter,
      description:
        "Lost 30 pounds and gained significant muscle mass following my 12-week strength and conditioning program.",
    },
    {
      id: 2,
      clientName: "Athul",
      timeFrame: "16 Weeks",
      beforeImage: athul1Before,
      afterImage: athul1After,
      description:
        "Transformed physique and improved strength dramatically through consistent training and nutrition.",
    },
    {
      id: 3,
      clientName: "Athul",
      timeFrame: "20 Weeks",
      beforeImage: athul2before,
      afterImage: athul2after,
      description:
        "Achieved a muscular physique through a customized bulking program and a strategic nutrition plan",
    },
    {
      id: 4,
      clientName: "Sunith PK",
      timeFrame: "20 Weeks",
      beforeImage: sunithBefore,
      afterImage: sunithAfter,
      description:
        "Achieved a muscular physique through a customized bulking program and a strategic nutrition plan",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % transformations.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      position: "absolute" as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      position: "absolute" as const,
      transition: { duration: 0.5 },
    }),
  };

  const current = transformations[activeIndex];

  return (
    <section
      id="transformations"
      className="section-spacing bg-surface"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block">CLIENT TRANSFORMATIONS</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Real results from real clients. These transformations showcase
            what's possible with dedication, expert guidance, and consistent
            effort.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BEFORE IMAGE */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <div className="absolute top-3 left-3 z-10 bg-[#E53935] text-black px-2 py-1 rounded font-bold text-sm">
                BEFORE
              </div>
              <div className="w-full h-full relative">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={current.beforeImage}
                    src={current.beforeImage}
                    alt={`${current.clientName} Before`}
                    variants={imageVariants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* AFTER IMAGE */}
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg">
              <div className="absolute top-3 left-3 z-10 bg-[#E53935] text-black px-2 py-1 rounded font-bold text-sm">
                AFTER
              </div>
              <div className="w-full h-full relative">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.img
                    key={current.afterImage}
                    src={current.afterImage}
                    alt={`${current.clientName} After`}
                    variants={imageVariants}
                    custom={direction}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* DESCRIPTION (static) */}
            <div className="md:col-span-2 bg-darkgray p-6 rounded-lg mt-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {current.clientName}
                  </h3>
                  <p className="text-[#E53935] font-semibold">
                    {current.timeFrame} Transformation
                  </p>
                </div>
                <div className="flex gap-2">
                  {transformations.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i === activeIndex ? "bg-[#E53935]" : "bg-gray-500"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              <p className="text-gray-300">{current.description}</p>
            </div>
          </div>

          {/* ARROWS */}
          <motion.button
            className="absolute top-1/3 -left-4 md:-left-12 bg-[#E53935] rounded-full p-2 text-black"
            whileHover={{ scale: 1.1, backgroundColor: "#E53935" }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            className="absolute top-1/3 -right-4 md:-right-12 bg-[#E53935] rounded-full p-2 text-black"
            whileHover={{ scale: 1.1, backgroundColor: "#E53935" }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
