import Link from "next/link";
// UI Icons
import { GiMushroomHouse } from "react-icons/gi";
import { DiJavascript } from "react-icons/di";
import { FaBloggerB } from "react-icons/fa6";

function Nav() {
  return (
    <div className="opacity-80 hover:opacity-100 fixed flex flex-col justify-center items-center h-screen w-10 gap-10">
      <Link href={"#hero"} className="text-2xl" title="Profile">
        <GiMushroomHouse className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
      </Link>
      <Link href={"#work"} className="text-2xl" title="Work">
        <DiJavascript className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
      </Link>
      <Link href={"#contact"} className="text-2xl" title="Blog">
        <FaBloggerB className="transition-all duration-150 ease-in-out hover:-translate-y-1" />
      </Link>
      <Link href={"/"} className="title">
        <div className="transition-all duration-150 ease-in-out hover:-translate-y-1">
          🐈
        </div>
      </Link>
    </div>
  );
}

export default Nav;
