import SingleProject from "./SingleProject";

const ProjectComponent = () => {
  return (
    <div className="min-h-screen max-w-[1140px] md:mx-auto mx-5 overflow-hidden">
      <div className="mt-20 mb-10 md:mt-28 w-[90%] mx-auto md:mx-0 md:w-full">
        <h1 className="text-center text-gray-300 text-base md:text-xl lg:text-2xl my-8 font-mono">
          Some of my recent works
          <span className="w-full block text-4xl lg:text-6xl font-sans font-bold">
            Projects
          </span>
        </h1>
        <input
          type="text"
          className="md:ml-3 w-[100%] md:w-[350px] p-2 rounded-md outline-none text-xl"
          placeholder="Search Projects"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-3">
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  );
};

export default ProjectComponent;
