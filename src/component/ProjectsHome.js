import SliderHome from "./SliderHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // slidesToSlide: 3 // optional, default to 1. console
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      // slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
      // slidesToSlide: 1 // optional, default to 1.
    }
  };


const ProjectsHome = () => {
    return (
        <div className=" h-screen max-h-screen flex justify-center items-center flex-col gap-y-12">
            <h1 className="text-white text-4xl text-center">Projects</h1>
            <div className=" max-w-[1100px] w-[90%] mx-auto">
                {/* sliders */}
                <Carousel 
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                   {
                    projectInfo.map((project) => {
                      return <SliderHome projectInfos={project} key={project.id} />
                    })
                   }
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectsHome