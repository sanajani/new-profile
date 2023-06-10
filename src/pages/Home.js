import Header from "../component/Header";
import AboutHome from "../component/AboutHome";
import ServicesHome from "../component/ServicesHome";
import ProjectsHome from "../component/ProjectsHome";

const Home = () => {
  return (
    <main className="min-w-full min-h-full bg-[#262626]">
      <Header/>
      <AboutHome/>
      <ServicesHome/>
      <ProjectsHome/>
    </main>
  )
}

export default Home