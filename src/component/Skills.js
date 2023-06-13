
const Skills = () => {
  return (
    <section className="bg-[#1f1f1f] rounded-lg my-10 text-white py-8 px-10">
      <h1 className="lg-text-5xl md:text-4xl text-3xl mb-8 font-semibold opacity-80">MY SKILLS</h1>
      <div>
        <div className="flex mr-10 mb-5 md:mb-8 sm:flex-row flex-col">
          <h2 className="md:text-3xl lg-text-4xl text-2xl opacity-80 font-medium inline-block w-52">FrontEnd</h2> 
          <ul className="flex md:justify-center md:items-center text-base md:text-xl opacity-80 my-2">
          <li className="bg-[#494949] mx-2 md:px-8">HTML</li>
          <li className="bg-[#494949] mx-2 md:px-8">CSS</li>
          <li className="bg-[#494949] mx-2 md:px-8">JavaScript</li>
          <li className="bg-[#494949] mx-2 md:px-8">React</li>
          </ul>
        </div>
        <div className="flex mr-10 mb-5 md:mb-8 sm:flex-row flex-col">
          <h2 className="md:text-3xl lg-text-4xl text-2xl  opacity-80 font-medium  inline-block w-52">BackEnd</h2> 
          <ul className="flex md:justify-center md:items-center md:text-xl opacity-80 my-2">
          <li className="bg-[#494949] mx-2 md:px-8">Node</li>
          <li className="bg-[#494949] mx-2 md:px-8">Express</li>
          <li className="bg-[#494949] mx-2 md:px-8">Django</li>
          </ul>
        </div>
        <div className="flex mr-10 mb-5 md:mb-8 sm:flex-row flex-col">
          <h2 className="md:text-3xl lg-text-4xl text-2xl  opacity-80 font-medium inline-block w-52">DataBase</h2> 
          <ul className="md:text-xl opacity-80  flex md:justify-center md:items-center my-2">
          <li className="bg-[#494949] mx-2 md:px-8">SQL</li>
          <li className="bg-[#494949] mx-2 md:px-8">MY SQL</li>
          <li className="bg-[#494949] mx-2 md:px-8">Mango DB</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
