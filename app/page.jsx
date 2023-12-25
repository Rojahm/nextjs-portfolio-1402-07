"use client";
import { useState } from "react";
// Ui icons
import { FiMoon, FiSun } from "react-icons/fi";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Slide from "./components/slide/Slide";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode && "dark"}>
      {/* min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth */}
      <div className="content min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark:text-neutral-300 text-red-950 absolute top-1 left-1 transition-all duration-200 ease-in-out"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <div className="text h-screen snap-start flex justify-center items-center min-h-screen bg-red-100 dark:bg-slate-800">
          <Hero />
        </div>
        <div className="min-h-screen h-screen snap-start">
          <Slide />
        </div>
        <div className="h-screen snap-start flex justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 from-0% to-rose-50 to-25%">
          <Contact />
        </div>
      </div>
    </main>
  );
}
