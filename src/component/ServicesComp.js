const ServicesComp = ({ item }) => {
  const { title, para, Img } = item;
  return (
    <div className="flex flex-col justify-center items-center">
        <Img size="30px" color='white' />
      <h1 className="text-center text-[1.4rem] md:text-[1.7rem] font-medium text-gray-300">
        {title}
      </h1>
      <p className="text-center my-4 text-[16px] md:text-[20px] text-gray-300 font-extralight">
        {para}
      </p>
    </div>
  );
};

export default ServicesComp;
