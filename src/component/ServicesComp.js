
const ServicesComp = ({icons,title,para}) => {
    console.log(title);
  return (
    <div>
    <h1 className="text-center text-[1.7rem] font-medium text-gray-300"> {title}</h1>
    <p className="text-center my-4 text-[20px] text-gray-300 font-extralight">{para}</p>
</div>
  )
}

export default ServicesComp