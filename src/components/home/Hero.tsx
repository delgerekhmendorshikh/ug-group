"use client";

import { useState } from "react";

export const Hero = () => {
  const videos = [
    "/assets/hero1.mp4",
    "/assets/hero2.mp4",
    "/assets/hero3.mp4",
    "/assets/hero4.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <div className="absolute z-20 h-screen w-full overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-full">
        <video
          key={videos[currentVideo]}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto flex h-full w-[86%] flex-col justify-end  pb-16 text-white ">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            LEADING <br />
            CONSTRUCTION <br />
            COMPANY
          </h1>
        </div>

        <div className="flex flex-col items-end gap-4 text-right">
          <p className="max-w-sm text-sm font-medium leading-relaxed sm:text-base md:text-lg">
            WE DELIVER THE HIGHEST QUALITY TO OUR PARTNERS AND CUSTOMERS THROUGH
            LEADERSHIP, PARTNERSHIP, AND INNOVATION.
          </p>

          <div className="flex gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`h-3 w-3 rounded-full border-2 transition-all sm:h-4 sm:w-4 ${
                  currentVideo === index
                    ? "border-white bg-white"
                    : "border-white bg-transparent hover:bg-white/50"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
