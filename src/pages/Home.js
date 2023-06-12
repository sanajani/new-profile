import Header from "../component/Header";
import AboutHome from "../component/AboutHome";
import ServicesHome from "../component/ServicesHome";
import ProjectsHome from "../component/ProjectsHome";
import TestmonialsSlider from "../component/TestmonialsSlider";

const Home = () => {
  return (
    <main className="min-w-full min-h-full bg-[#262626]">
      <Header/>
      <AboutHome/>
      <ServicesHome/>
      <ProjectsHome/>
      <TestmonialsSlider/>
    </main>
  )
}

export default Home