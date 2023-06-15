import SingleProject from "./SingleProject";

const projectInfo = [
  {
    name:"Fylo",
    desc:"Fylo is a single page web template with beautiful design and responsive",
    img:"./assets/dk-1.jpg",
    id:1
  },
  {
    name:"Huddle",
    desc:"Huddle is a single page web template with beautiful design and responsive",
    img:"./assets/dk-2.jpg",
    id: 2
  },
  {
    name:"Price Page",
    desc:"This one is single page price template responsive and cool looking webpage design ",
    img:"./assets/dk-4.jpg",
    id: 3
  },
  {
    name:"Sign Up Page",
    desc:"This one is single page Signup form template responsive and cool looking webpage design",
    img:"./assets/dk-5.jpg",
    id: 4
  },
]



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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-3">
        {
          projectInfo.map((singleproject) => {
            return <SingleProject project={singleproject} key={singleproject.id} />
          })
        }
      </div>
    </div>
  );
};

export default ProjectComponent;
