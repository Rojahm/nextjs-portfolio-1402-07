"use client";

const Section = ({ color }) => {
  const colorVariants = {
    stone: "bg-stone-400",
    red: "bg-red-400",
    orange: "bg-orange-400",
    cyan: "bg-cyan-500",
    blue: "bg-blue-400",
    rose: "bg-rose-400",
    sky: "bg-sky-300",
    teal: "bg-teal-400",
  };
  return (
    <section
      className={`${colorVariants[color]} flex w-[300px] min-w-[300px] hover:min-w-[600px] transition-all ease-in-out duration-700 px-6 min-h-screen justify-center items-center text-center`}
    >
      <article></article>
    </section>
  );
};

export default Section;
