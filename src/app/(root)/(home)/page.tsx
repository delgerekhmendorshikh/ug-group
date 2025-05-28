"use client";
import { useEffect, useState } from "react";
import About from "@/components/home/AboutUs";
import Core from "@/components/home/CoreIndustries";
import { Hero } from "@/components/home/Hero";
import ProjectSuccess from "@/components/home/ProjectSuccess";
import News from "@/components/home/WeeklyNews";

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
        <Core />
        <About />
        <ProjectSuccess />
        <News />
      </div>
    </div>
  );
};

export default HomePage;
