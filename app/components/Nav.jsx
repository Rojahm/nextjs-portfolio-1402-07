import Link from "next/link";

function Nav() {
  return (
    <div className="fixed flex flex-col justify-center items-center h-screen w-10 gap-10">
      <Link href={"/"} className="opacity-50">
        ⚪
      </Link>
      <Link href={"/"} className="opacity-50">
        ⚪
      </Link>
      <Link href={"/"} className="opacity-50">
        ⚪
      </Link>
      <Link href={"/"} className="opacity-50">
        ⚪
      </Link>
    </div>
  );
}

export default Nav;
