"use client";
import { useEffect, useState } from "react";
import AboutUs from '@/components/home/AboutUs';
import CoreIndustries from '@/components/home/CoreIndustries';
import { Hero } from '@/components/home/Hero';
import ProjectSuccess from '@/components/home/ProjectSuccess';
import WeeklyNews from '@/components/home/WeeklyNews';

const HomePage = () => {
  const [paddingTop, setPaddingTop] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPaddingTop(window.innerHeight);
    }
  }, []);

  return (
    <div>
      <Hero />
      <div style={{ paddingTop: `${paddingTop}px` }}>
        <CoreIndustries />
        <AboutUs />
        <ProjectSuccess />
        <WeeklyNews />
      </div>
    </div>
  );
};

export default HomePage;
