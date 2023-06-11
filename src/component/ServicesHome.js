import ServicesComp from "./ServicesComp"

const data = [
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look.",
        key:1,
    },
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look.",
        key:2,
    },
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look.",
        key:3,
    }
]

const ServicesHome = () => {
    return (
        <div className=" flex justify-center items-center flex-col">
            <h1 className="text-[36px] text-center md:text-[44px] lg:text-[60px] uppercase font-mono font-bold tracking-wider text-gray-300"><span className="block text-xl md:text-2xl lowercase tracking-normal">What I will do for you</span>
                Services
            </h1>
            <div className="lg:max-w-[1100px] w-[90%] overflow-hidden gap-8 mx-auto flex flex-col md:flex-row mt-10 ">
              {
                data.map((item,index) => {
                    return <ServicesComp item={item} key={item.key} />
                })
              }
            </div>
        </div>
    )
}

export default ServicesHome