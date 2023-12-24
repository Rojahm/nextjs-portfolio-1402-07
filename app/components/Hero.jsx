import DownButton from "./DownButton";

const Hero = () => {
  return (
    <section className="">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="title">
            <div>👋Hi I'm Roja Hosseini</div>
          </h1>
          <h1 className="title">
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
