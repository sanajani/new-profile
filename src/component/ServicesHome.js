import ServicesComp from "./ServicesComp"

const data = [
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look."
    },
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look."
    },
    {
        title:"Web Design",
        para:"I do ui/ux design for the website that helps website to get a unique look."
    },
]

const ServicesHome = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-[60px] uppercase font-mono font-bold tracking-wider text-gray-300"><span className="block text-2xl lowercase tracking-normal">What I will do for you</span>
                Services
            </h1>
            <div className="w-[80%] gap-6 mx-auto flex mt-10">
              <ServicesComp title={data[0].title} para={data[0].para} />
              <ServicesComp title={data[1].title} para={data[1].para} />
              <ServicesComp title={data[2].title} para={data[2].para} />
            </div>
        </div>
    )
}

export default ServicesHome