function Slide({ project }) {
  return (
    <div className="flex min-w-full transition-all ease-in-out duration-700 px-6 min-h-screen justify-center items-center text-center">
      <div className="flex flex-col">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Slide;
