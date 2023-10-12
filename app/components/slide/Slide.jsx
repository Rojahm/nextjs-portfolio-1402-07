"use client";
import { useRef } from "react";
import Section from "./Section";
// ui icons
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Slide = () => {
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
    <div>
      <div className="flex min-w-full absolute top-[40vh] p-3">
        <button
          className="mr-auto bg-stone-300/50 rounded hover:bg-stone-500/50"
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
      <div className="flex overflow-x-scroll" ref={carouselRef}>
        <Section color={"red"} />
        <Section color={"cyan"} />
        <Section color={"stone"} />
        <Section color={"red"} />
        <Section color={"teal"} />
        <Section color={"orange"} />
      </div>
    </div>
  );
};

export default Slide;
