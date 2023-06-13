import { Link } from "react-router-dom"
const AboutMeInfo = () => {
  return (
    <section className="flex md:flex-row flex-col md:mt-20 min-h-screen ">
        {/* about me */}
        <section className="md:w-[60%] py-20 text-gray-300 mx-10 md:mx-0">
            <h1 className="text-xl md:text-2xl my-4 font-mono">Hi, I am <span className="bg-[#161616] py-1 px-6">Sanaullah</span> <span className="font-sans block w-full sm:text-3xl md:text-5xl md:mb-8 font-semibold">A freelance Web developer</span></h1>
            <p className="my-6 sm:my-10 sm:leading-7 md:text-xl opacity-80"> I am from chittagong, Bangladesh. A place of beauty and nature. Since my childhood, i love art and design. I always try to design stuff with my unique point of view. I also love to create things that can be usefull to others.</p>
            <p className="my-6 sm:my-10 sm:leading-7 md:text-xl opacity-80">I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</p>
            <p className="my-6 mb-12 sm:my-10 sm:leading-7 md:text-xl opacity-80">My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
            <Link className="py-4 px-12 sm:text-2xl rounded-lg bg-gray-300 text-[#1f1f1f] font-medium" to="/download">Download CV</Link>
        </section>
        {/* my image */}
        <section className="md:w-[40%] object-cover mx-10 md:mx-0 overflow-hidden">
            <img className="object-cover md:p-10 max-w-[100%] overflow-hidden w-full" src="./assets/sana_5.jpg" alt="Sanaullah" />
        </section>
    </section>
  )
}

export default AboutMeInfo