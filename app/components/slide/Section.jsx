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
      <article>
        <h1>What is Lorem Ipsum?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
    </section>
  );
};

export default Section;
