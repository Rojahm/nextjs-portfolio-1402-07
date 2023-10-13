import DownButton from "./DownButton";

const Hero = () => {
  return (
    <section className="relative h-screen snap-start flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 from-0% to-rose-50 to-25%">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className=" text-rose-950 font-semibold">
            <div>👋Hi I'm Roja Hosseini</div>
          </h1>
          <h1 className=" text-rose-950 font-semibold">
            <div>سلام من روجا حسینی هستم👋</div>
          </h1>
        </div>
        <p>
          web/web app developer. Front-end React.JS, Next.JS Node.JS Full-Stack
          Developer
        </p>
        <p>I Make my Projects from scratch and deploy them</p>

        <p>You can view my academic and experience resume on LinkedIn</p>
      </div>
      <DownButton />
    </section>
  );
};

export default Hero;
