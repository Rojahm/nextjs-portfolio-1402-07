import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Slide from "./components/slide/Slide";

export default function Home() {
  return (
    <main className="min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Hero />
      <div className="min-h-screen h-screen snap-start">
        <Slide />
      </div>
      <div className="h-screen snap-start flex justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 from-0% to-rose-50 to-25%">
        <Contact />
      </div>
    </main>
  );
}
