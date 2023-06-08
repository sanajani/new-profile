import { NavLink } from 'react-router-dom'
// import { useState } from 'react'


const Navbar = () => {

  return (
    <div className="bg-transparent fixed top-0 left-0 w-screen z-10">
      <nav className="max-w-[1200px] py-3 mx-auto">
        <ul className="flex justify-center items-center gap-10">
          <li ><NavLink to='/' className={`text-white md:text-2xl text-1xl`} >Home</NavLink></li>
          <li ><NavLink to='/about'className={`text-white md:text-2xl text-1xl`}>About</NavLink></li>
          <li ><NavLink to='/project'className={`text-white md:text-2xl text-1xl`}>Project</NavLink></li>
          <li ><NavLink to='/contact'className={`text-white md:text-2xl text-1xl`}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar


// className={`text-white md:text-2xl text-1xl`}
// className={`text-white md:text-2xl text-1xl`}
// className={`text-white md:text-2xl text-1xl`}
