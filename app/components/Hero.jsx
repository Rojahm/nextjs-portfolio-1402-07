"use client";
import Link from "next/link";
import Image from "next/image";
//custom
import DownButton from "./DownButton";

const Hero = ({ dark }) => {
  console.log(dark);
  return (
    <section>
      <div className="flex justify-around items-center text-center mb-10">
        <Link
          href={"/"}
          className={
            dark
              ? "bg-slate-900 rounded-full transition-all duration-300 ease-in-out"
              : "bg-blue-500/60 rounded-full transition-all duration-300 ease-in-out"
          }
        >
          <Image
            src={"/img/rojGandalf.png"}
            width={300}
            height={300}
            alt="Roja in Gandalf Custom"
            className="rounded-full shadow-2xl"
          />
        </Link>
        <div>
          <h1 className="title">
            <div>👋 Hi I'm Roja Hosseini</div>
          </h1>
          <h1 className="title">
            <div>سلام من روجا حسینی هستم 👋</div>
          </h1>
        </div>
      </div>
      <div className="text-center">
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
