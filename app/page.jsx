import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Slide from "./components/slide/Slide";

export default function Home() {
  return (
    <main className="min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <div className="min-h-screen h-screen snap-start flex justify-center items-center">
        <Hero />
      </div>
      <div className="min-h-screen h-screen snap-start">
        <Slide />
      </div>
      <div className="min-h-screen h-screen snap-start">
        <Contact />
      </div>
    </main>
  );
}
