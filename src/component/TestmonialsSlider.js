import Carousel from "react-multi-carousel";
import Testmonials from "./Testmonials";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1,
    // slidesToSlide: 1 // optional, default to 1.
  },
};

const testMonials_data = [
  {
    message:
      "Sanaullah is a person of commitment. He is really good at what he is doing. I really like his work. Especially the unique point of view of designing.",
    name: "Sirajuddin",
    job_title: "CEO",
    company_name: "Afghan Morvarid",
    id: 1,
  },
  {
    message:
      "Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work.",
    name: "Fahim Elahe",
    job_title: "Co-founder, ",
    company_name: "Kreetive",
    id: 2,
  },
  {
    message:
      "Really hard-working person. Deliver the work as promised. Planning to work more with this person.",
    name: "Sayed",
    job_title: "Marketing Head, ",
    company_name: "Eleven Dawn",
    id: 3,
  },
];

const TestmonialsSlider = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div>
        <h1 className=" text-center text-2xl lg:text-5xl font-bold text-gray-300 tracking-widest"><span className="block md:text-2xl text-xl tracking-normal font-light mt-12 md:my-2 font-mono ">see what our clients say about us</span> TESTIMONIALS</h1>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {testMonials_data.map((data) => {
          return <Testmonials data={data} key={data.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default TestmonialsSlider;
