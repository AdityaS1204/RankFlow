'use client';

import React from 'react';

interface ProjectCard {
  id: number;
  title: string;
}

const Work: React.FC = () => {
  // Sample project data - replace with actual landing pages
  const projects: ProjectCard[] = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
    { id: 3, title: 'Project 3' },
    { id: 4, title: 'Project 4' },
    { id: 5, title: 'Project 5' },
    { id: 6, title: 'Project 6' },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Work</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Landing pages designed to convert
        </p>

        {/* Marquee Container */}
        <div className="overflow-hidden">
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .marquee {
              display: flex;
              animation: marquee 30s linear infinite;
            }

            .marquee:hover {
              animation-play-state: paused;
            }

            .marquee-item {
              flex-shrink: 0;
              margin-right: 1.5rem;
            }
          `}</style>

          <div className="marquee">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="marquee-item">
                <div className="w-72 h-96 bg-gray-200 rounded-lg border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
