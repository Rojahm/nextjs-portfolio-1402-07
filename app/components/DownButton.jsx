import Link from "next/link";

const DownButton = ({ link }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        href={link}
        className="absolute bottom-5 hover:translate-y-3 p-4 transition-all ease-in-out duration-200 opacity-30 hover:opacity-100"
      >
        see my projects 👇
      </Link>
    </div>
  );
};

export default DownButton;
