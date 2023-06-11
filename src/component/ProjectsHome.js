import SliderHome from "./SliderHome";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // slidesToSlide: 3 // optional, default to 1.
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
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <SliderHome/>
                    <SliderHome/>
                    <SliderHome/>      
                    <SliderHome/>
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectsHome