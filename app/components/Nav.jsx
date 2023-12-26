import Link from "next/link";
// UI Icons
import { DiJavascript } from "react-icons/di";
import { FaBloggerB } from "react-icons/fa6";

function Nav() {
  return (
    <div className="fixed flex flex-col justify-center items-center h-screen w-10 gap-10">
      <Link
        href={"#hero"}
        className="text-2xl shadow-lg rounded-full"
        title="Profile"
      >
        <div className="nav-item">👩🏻‍💻</div>
      </Link>
      <Link
        href={"#work"}
        className="text-3xl shadow-lg rounded-full"
        title="Work"
      >
        <DiJavascript className="nav-item text-yellow-600 dark:text-yellow-500" />
      </Link>
      <Link
        href={"#contact"}
        className="p-1 shadow-lg rounded-full"
        title="Blog"
      >
        <FaBloggerB className="nav-item text-2xl text-orange-700 shadow-2xl dark:text-orange-600" />
      </Link>
      <Link href={"/"} className="shadow-lg rounded-full">
        <div className="nav-item text-xl">🐈</div>
      </Link>
    </div>
  );
}

export default Nav;
