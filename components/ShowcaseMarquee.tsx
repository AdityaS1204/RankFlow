"use client";

import React from "react";
import Image from "next/image";

const images = [
  "/showcase/showcase1.png",
  "/showcase/showcase2.png",
  "/showcase/showcase3.png",
  "/showcase/showcase4.png",
  "/showcase/showcase5.png",
];

const ShowcaseMarquee = () => {
  // Use a longer list to ensure the marquee fills the screen and loops smoothly
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-16 bg-white">
      {/* Marquee Animation Container */}
      <div className="flex w-max animate-marquee-showcase items-center">
        {marqueeImages.map((src, index) => {
          return (
            <div
              key={index}
              className="shrink-0 mx-2 w-[250px] h-[120px] md:w-[400px] md:h-[250px] border rounded-2xl border-slate-700/30 bg-slate-200 relative overflow-hidden group">

              <div className="absolute right-0 bottom-0 w-[85%] h-[85%] overflow-hidden rounded-tl-xl border-t border-l border-slate-200 shadow-[-10px_-10px_30px_rgba(0,0,0,0.05)] z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={src}
                  alt={`Showcase ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index < 4}
                />
              </div>
            </div>
          );
        })}
      </div>

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
          animation: marquee-showcase 60s linear infinite;

        }
      `}</style>
    </div>
  );
};

export default ShowcaseMarquee;
