import Link from "next/link";

function Nav() {
  return (
    <div className="opacity-80 hover:opacity-100 fixed flex flex-col justify-center items-center h-screen w-10 gap-10">
      <Link href={"#hero"} className="title">
        <div className="transition-all duration-150 ease-in-out hover:-translate-y-1">
          👩‍💻
        </div>
      </Link>
      <Link href={"#work"} className="title">
        <div className="transition-all duration-150 ease-in-out hover:-translate-y-1">
          💪
        </div>
      </Link>
      <Link href={"#contact"} className="title">
        <div className="transition-all duration-150 ease-in-out hover:-translate-y-1">
          🅱
        </div>
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
