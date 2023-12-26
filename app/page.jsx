"use client";
import { useState } from "react";
// Ui icons
import { FiMoon, FiSun } from "react-icons/fi";
// Custom
import Nav from "./components/Nav";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Slide from "./components/slide/Slide";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={darkMode && "dark"}>
      <Nav />

      {/* min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth */}
      <div className="content min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth transision-all duration-150 ease-in-out bg-cyan-100 dark:bg-slate-800">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text absolute top-1 left-1 transition-all duration-200 ease-in-out"
        >
          {darkMode ? (
            <FiSun className="hover:rotate-180 transition-all duration-1000 ease-in-out" />
          ) : (
            <FiMoon className="absolute top-3 -translate-y-2 transition-all duration-1000 ease-in-out" />
          )}
        </button>
        <div className="text h-screen snap-start flex justify-center items-center min-h-screen">
          <Hero dark={darkMode} />
        </div>
        <div className="min-h-screen h-screen snap-start">
          <Slide />
        </div>
        <div className="h-screen snap-start flex justify-center items-center min-h-screen">
          <Contact />
        </div>
      </div>
    </main>
  );
}
