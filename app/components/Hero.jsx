"use client";
import Link from "next/link";
import Image from "next/image";
//custom
import DownButton from "./DownButton";
//UI UX Icons
import {
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
  FaGithubAlt,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Hero = ({ dark }) => {
  return (
    <section id="hero">
      <div className="flex flex-col md:flex-row justify-around items-center text-center md:mb-10">
        <Link
          href={"/"}
          className={
            dark
              ? "bg-slate-900 rounded-full transition-all duration-300 ease-in-out"
              : "bg-cyan-500/60 rounded-full transition-all duration-300 ease-in-out"
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
        <div className="flex flex-col h-[150px] justify-evenly">
          <div>
            <h1 className="title">
              <div>👋 Hi I'm Roja Hosseini</div>
            </h1>
            <h1 className="title">
              <div>سلام من روجا حسینی هستم 👋</div>
            </h1>
          </div>
          <div className="title flex justify-between text-xl ">
            <Link href={"https://github.com/Rojahm"} target="_blank">
              <FaGithubAlt className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/roja-h-m-311524233/"}
              target="_blank"
            >
              <FaLinkedin className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
            {/* <Link href={"/"}>
              <FaInstagram className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link> */}
            <Link href={"https://t.me/rojahm"} target="_blank">
              <FaTelegram className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
            <Link href={"https://www.youtube.com/@rojahm"} target="_blank">
              <FaYoutube className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
            <Link href={"mailto:roja@rojahm.ir"} target="_blank">
              <MdOutlineEmail className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
            {/* <Link href={"/"}>
              <FaFacebookF className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link> */}
            <Link href={"https://twitter.com/Ro1194H"} target="_blank">
              <FaXTwitter className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center p-10 md:p-1">
        <p>
          web/web app developer. Front-end React.JS, Next.JS Node.JS Full-Stack
          Developer
        </p>
        <p>I Make my Projects from scratch and deploy them</p>
        <p>You can view my academic and experience resume on LinkedIn</p>
      </div>
      <DownButton link={"#work"} />
    </section>
  );
};

export default Hero;
