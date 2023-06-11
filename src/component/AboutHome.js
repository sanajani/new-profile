import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <section className="min-h-screen my-24 flex flex-col md:flex-row justify-center items-center max-w-[1140px] mx-auto">
      {/* left section some text about me */}
      <section className="w-full px-6 lg:w-[50%] ">
        <h1 className=" text-[32px] md:text-[40px] lg:text-[60px] font-bold text-gray-300 tracking-widest mb-4">
          <span className="block text-xl md:text-2xl font-mono font-thin text-gray-400">
            Let me introduce myself
          </span>
          About Me
        </h1>
        <p className="text-[#a7a7a7] leading-snug text-[16px] md:text-[20px] font-mono">
          I am a freelance website designer and developer from Herat,
          Afghanistan. I create professional websites. I love art and always try
          to show unique views to the audience through my design.
        </p>
        <Link
          className="inline-block text-xl md:text-2xl lg:text-3xl border-2 rounded mb-10 text-[#262626] bg-gray-200 border-gray-200 mt-8 mr-4 py-2 px-8"
          to="/about"
        >
          Works
        </Link>
        <Link
          className="inline-block text-xl md:text-2xl lg:text-3xl border-2 rounded mb-10 text-gray-200 border-gray-200 mt-8 ml-4 py-2 px-8"
          to="/about"
        >
          read more
        </Link>
      </section>
      <section className="w-full lg:w-[50%] relative ">
        <img
          src="./assets/sana_5.jpg"
          className="border-4 border-gray-300 max-h-[500px] w-[400px] object-cover ml-auto mr-4 brightness-75"
          alt="my"
        />
        <img
          src="./assets/sana_3.jpg"
          alt=""
          className="border-4 border-gray-300  max-h-[360px] w-[300px] object-cover absolute -bottom-12 left-16 brightness-75 "
        />
      </section>
    </section>
  );
};

export default AboutHome;
