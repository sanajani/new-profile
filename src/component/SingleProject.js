
const SingleProject = ({project}) => {
  const {name,desc,img} = project;
  return (
    <div className="my-5 md:my-10 ">
      <img
        src={img}
        className="h-[400px] max-[420px] object-cover p-1 rounded-lg border-2 w-full border-gray-300"
        alt={name}
      />
      <div className="my-3 rounded-md bg-[#181818] text-gray-400 pb-5 px-2 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl pb-3">{name}</h1>
        <p className="font-mono text-base md:text-[18px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
