import React from 'react';
import Image from 'next/image';

export const GlobalFootprint = () => {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#8B0000] mb-6">
            Our Global Footprint & Nationwide Impact
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Global innovation, local execution—our presence spans continents and corners of India.
          </p>
        </div>

        {/* --- Maps Layout --- */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 mt-10">
          
          {/* 1. Left: World Map (Empty) */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-16 z-10">
            <div className="relative w-full max-w-[550px] aspect-[16/9] opacity-90 hover:opacity-100 transition-opacity duration-500">
               {/* Replace src with your actual blank world map file */}
               <img 
                 src="/world-map-gray.svg" 
                 alt="Global Presence" 
                 className="w-full h-full object-contain grayscale opacity-50"
                 // Fallback styling if image is missing
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('bg-gray-100', 'rounded-lg', 'border', 'border-dashed', 'border-gray-300');
                 }}
               />
               {/* Fallback Text if no image */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-400 text-sm">
                 [World Map Image]
               </div>
            </div>
          </div>

          {/* 2. The Connection Line (Desktop Only) */}
          {/* This creates the visual link from World -> India without pins */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[50%] h-[200px] pointer-events-none z-20">
            <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#b91c1c" />
                </marker>
              </defs>
              {/* Dashed Path connecting the two areas */}
              <path 
                d="M 100,100 C 250,100 350,100 500,100" 
                fill="none" 
                stroke="#b91c1c" 
                strokeWidth="2" 
                strokeDasharray="6,6"
                markerEnd="url(#arrowhead)"
                className="opacity-60"
              />
            </svg>
          </div>

          {/* 3. Right: India Map (Empty) */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-16 z-10">
            <div className="relative w-full max-w-[400px] aspect-[3/4] opacity-90 hover:opacity-100 transition-opacity duration-500">
              {/* Replace src with your actual blank India map file */}
              <img 
                 src="/india-map-gray.svg" 
                 alt="Nationwide Impact" 
                 className="w-full h-full object-contain grayscale opacity-50"
                 // Fallback styling
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement?.classList.add('bg-gray-100', 'rounded-lg', 'border', 'border-dashed', 'border-gray-300');
                 }}
               />
                {/* Fallback Text if no image */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 text-gray-400 text-sm">
                 [India Map Image]
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;