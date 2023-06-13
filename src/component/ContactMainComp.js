import { HiPhone, HiOutlineMail } from "react-icons/hi";
import { TbMapPinFilled } from "react-icons/tb";

const ContactMainComp = () => {
  return (
    <div className="mt-20 mb-10 md:mt-28 text-gray-300">
        <h1 className="text-center text-xl md:text-2xl font-mono font-thin">
          get in touch
          <span className="text-3xl md:text-5xl block w-full my-4 font-sans font-bold">Contact</span>
        </h1>
      {/* <div> */}
        <div className=" grid  md:grid-cols-2 md:gap-20 mt-20">
          {/* information */}
          <div className="md:mt-8 mx-10 md:mx-8">
            <div className="flex bg-[#1f1f1f] py-6 rounded-lg px-2 items-center text-2xl md:text-3xl my-4">
            <HiPhone /> <span className="mx-4 text-xl md:text-2xl">+93 797099060</span>
            </div>
            <div className="flex bg-[#1f1f1f] py-6 rounded-lg px-2 items-center text-2xl md:text-3xl my-4">
              <HiOutlineMail /> <span className="mx-4 text-xl md:text-2xl">webdevfarsi@gmail.com</span>
            </div>
            <div className="flex bg-[#1f1f1f] py-6 rounded-lg px-2 items-center text-2xl md:text-3xl my-4">
              <TbMapPinFilled /> <span className="mx-4 text-xl md:text-2xl">Herat, Afghanistan</span>
            </div>
          </div>
          {/* contact form */}
          <div className="">
            <form className="flex flex-col">
              {/* <div> */}
                <label className=" mx-10 md:mx-8 text-base md:text-xl mt-3" htmlFor="name">Your Name</label>
                <input className="mx-10 md:mx-8 rounded-md bg-[#1f1f1f] text-gray-300 outline-none border-none text-xl md:text-2xl py-4 pl-4 my-2" type="text" id="name" />
              {/* </div> */}
              {/* <div> */}
                <label className=" mx-10 md:mx-8 text-base md:text-xl mt-3" htmlFor="email">Your Email</label>
                <input className="mx-10 md:mx-8 rounded-md bg-[#1f1f1f] text-gray-300 outline-none border-none text-xl md:text-2xl py-4 pl-4 my-2" type="email" id="email" />
              {/* </div> */}
              {/* <div> */}
                <label className=" mx-10 md:mx-8 text-base md:text-xl mt-3" htmlFor="textArea">Your Message</label>
                <textarea className="mx-10 md:mx-8 rounded-md bg-[#1f1f1f] resize-none min-h-[200px] text-gray-300 outline-none border-none text-xl md:text-2xl py-4 pl-4 my-2" name="message" id="textArea" cols="" rows=""></textarea>
              {/* </div> */}
              <div className="mt-5 mx-10 md:mx-8">
              <button className="bg-[#1f1f1f] py-3 px-12 rounded-md text-xl md:text-2xl">Send</button>
              </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default ContactMainComp;
