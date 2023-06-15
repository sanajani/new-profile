
const SliderHome = ({projectInfos}) => {
    const {name,desc,img} = projectInfos;
    return (
        <div className="w-full px-2">
            <img src={img} className=" border-2 rounded-md h-[300px] max-h-[350px] w-full border-gray-300" alt="Hello from this" />
            <div className="  my-3 rounded-md bg-[#181818] text-gray-400 pb-5 px-2 ">
                <h1 className="text-xl md:text-2xl lg:text-3xl pb-3">{name}</h1>
                <p className="font-mono text-base md:text-[18px]">{desc}</p>
            </div>
        </div>
    )
}

export default SliderHome