"use client";
import { useRef } from "react";
// import Project from "./Project";
// ui icons
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Slide from "./Slide";

function SliderPage() {
  let projects = [
    {
      title: "Project 1",
      description: "This is Project 1",
    },
    {
      title: "Project 2",
      description: "This is Project 2",
    },
    {
      title: "Project 3",
      description: "This is Project 3",
    },
  ];
  const carouselRef = useRef();
  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + width * data,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      id="work"
      className="w-[98.5vw] h-full overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar transision-all duration-150 ease-in-out"
    >
      <div className="flex relative top-1/2">
        <button
          className="mr-auto bg-stone-300/50 rounded hover:bg-stone-500/50 left-16 relative"
          onClick={() => carouselSwitcher(-1)}
        >
          <FiArrowLeft size={25} className="text-stone-200" />
        </button>
        <button
          className="ml-auto bg-stone-300/50 rounded hover:bg-stone-500/50"
          onClick={() => carouselSwitcher(1)}
        >
          <FiArrowRight className="text-stone-200 text-[25px]" />
        </button>
      </div>
      <div className="flex Slider" ref={carouselRef}>
        {projects.map((project, index) => (
          <Slide key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default SliderPage;
