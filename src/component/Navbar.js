import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState } from 'react';

const Navbar = () => {
  const [toggleNav,setToggleNav] = useState(false);

  const openAndCloseNav = () => {
    setToggleNav(!toggleNav);
  }

  return (
    <div className="bg-[#262626] fixed top-0 right-0 md:left-0 h-[70px] w-screen z-[1000]  md:block">
      <nav className="max-w-[1200px] py-3 mx-auto">
        <ul className="hidden md:flex justify-center items-center flex-row">
          <li className='hover:bg-[#1a1a1a] py-2 px-6 rounded-[5px] w-full md:w-auto my-2 md:my-0 '><NavLink to='/' className=" text-gray-400 md:text-2xl text-1xl">Home</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full md:w-auto my-2 md:my-0'><NavLink to='/about'className=" text-gray-400 md:text-2xl text-1xl">About</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full md:w-auto my-2 md:my-0'><NavLink to='/project'className=" text-gray-400 md:text-2xl text-1xl">Project</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full md:w-auto my-2 md:my-0'><NavLink to='/contact'className=" text-gray-400 md:text-2xl text-1xl">Contact</NavLink></li>
        </ul>
        <button className='md:hidden absolute top-6 right-12 text-white text-3xl '
        onClick={openAndCloseNav}
        >{toggleNav? <CgClose/>: <FiMenu/> }</button>
         <ul className={toggleNav ? "md:hidden flex justify-center items-center flex-col w-full min-h-full bg-[#262626] py-20 px-10 transition-all" : 'hidden'}>
          <li className='hover:bg-[#1a1a1a] py-2 px-6 rounded-[5px] w-full  '><NavLink onClick={() => setToggleNav(!toggleNav)} to='/' className="py-3 px-1 text-gray-400 md:text-2xl text-1xl h-full w-full block">Home</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full '><NavLink onClick={() => setToggleNav(!toggleNav)} to='/about'className="py-3 px-1 text-gray-400 md:text-2xl text-1xl w-full block">About</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full '><NavLink onClick={() => setToggleNav(!toggleNav)} to='/project'className="py-3 px-1 text-gray-400 md:text-2xl text-1xl w-full block">Project</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px] w-full '><NavLink onClick={() => setToggleNav(!toggleNav)} to='/contact'className="py-3 px-1 text-gray-400 md:text-2xl text-1xl w-full block">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar