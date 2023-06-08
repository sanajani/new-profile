// import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    // const []
    return (
        <header className="h-screen min-h-[1000px] w-[90%] mx-auto text-center flex justify-center items-center relative">
            <section className="flex justify-center items-center h-full relative top-28">
                <div className="absolute top-16 text-4xl w-full z-10">
                    <h1 className="text-white w-full flex flex-col gap-4">
                        <span className="text-2xl mb-2 font-bold text-gray-300">Hello, this is</span>
                        <span className="text-[5rem] ">Sanaullah Mobini</span>
                    </h1>
                </div>
                <section className="relative">
                    <div className="w-[700px] h-[700px] border-gray-300 border-2 rounded">
                        <img className="w-full h-full object-cover brightness-50" src='./assets/sana_5.jpg' alt="png photosfrom" />
                    </div>
                    <div className=" absolute bottom-32 text-gray-100 font-medium text-center text-[1.2rem] w-full tracking-wide">
                        <p >I am working as a programmer web designer </p> 
                        <p>and developer for 2 years I love to design and make </p> 
                        <p> new web experiences for the people.</p>
                        <Link to='/project' className=" inline-block relative top-10 border rounded-md border-gray-400 py-3 bg-gray-400 px-20 text-[#262626] text-2xl font-normal tracking-wide">See My Works</Link>
                    </div>
                </section>
            </section>
                <div className="w-full absolute text-2xl text-gray-300 ">
                    <span className="absolute left-0 tracking-[10px] rotate-90 top-52">Follow</span>
                    <span className="absolute right-0 tracking-[10px] rotate-90 top-80">scroll </span>
                </div>
        </header>
    )
}

export default Header