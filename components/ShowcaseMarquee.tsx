"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  "/showcase/showcase1.png",
  "https://res.cloudinary.com/dp5tdrmf8/image/upload/v1777723081/voicecraft-001_mp0p5l.png",
  "/showcase/showcase4.png",
  "/showcase/showcase5.png",
  "https://res.cloudinary.com/dp5tdrmf8/image/upload/v1777723515/workspire_qcyp9e.png",
  "https://res.cloudinary.com/dp5tdrmf8/image/upload/v1777710066/demo-hero-seection_vqio0j.png",
  "https://res.cloudinary.com/dp5tdrmf8/image/upload/v1777723596/intima_mpnemy.png",
];

const ShowcaseMarquee = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Use a longer list to ensure the marquee fills the screen and loops smoothly
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-16 bg-white">
      {/* Marquee Animation Container */}
      <div 
        className={`flex w-max items-center animate-marquee-showcase ${
          selectedId !== null ? "[animation-play-state:paused]" : ""
        }`}
      >
        {marqueeImages.map((src, index) => {
          return (
            <motion.div
              layoutId={isLargeScreen ? `image-${index}` : undefined}
              key={index}
              onClick={() => isLargeScreen && setSelectedId(index)}
              className={`shrink-0 mx-2 w-[350px] h-[220px] md:w-[550px] md:h-[450px] border rounded-2xl border-slate-700/30 bg-slate-200 relative overflow-hidden group ${
                isLargeScreen ? "cursor-pointer" : ""
              }`}
            >
              <div className="absolute right-0 bottom-2.5 md:right-0 md:bottom-4.5 w-[95%] h-[90%] overflow-hidden rounded-l-xl border-t border-l border-slate-200 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)] z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={src}
                  alt={`Showcase ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              layoutId={`image-${selectedId}`}
              className="relative w-full max-w-6xl aspect-video bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={marqueeImages[selectedId]}
                alt="Selected Showcase"
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors z-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes marquee-showcase {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-showcase {
          animation: marquee-showcase 90s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ShowcaseMarquee;

