import AboutMeInfo from "../component/AboutMeInfo"
import AboutEducation from "../component/AboutEducation"
import Skills from "../component/Skills"



const About = () => {
    return (
      <div className="max-w-[1140px] md:mx-10 lg:mx-auto">
        <AboutMeInfo/>
        <AboutEducation/>
        <Skills/>
      </div>
    )
  }
  
  export default About