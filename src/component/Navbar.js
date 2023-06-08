import { NavLink } from 'react-router-dom'
// import { useState } from 'react'


const Navbar = () => {

  return (
    <div className="bg-transparent fixed top-0 left-0 w-screen z-10">
      <nav className="max-w-[1200px] py-3 mx-auto">
        <ul className="flex justify-center items-center gap-10">
          {/* <li className={`text-white md:text-2xl text-1xl`}><NavLink to='/'>Home</NavLink></li> */}
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? 'bg-red-500' : undefined
            }
          >
            Tasks
          </NavLink>
          {/* className={`${active?'font-bold text-red':'text-gray-900'} */}
          <li className={`text-white md:text-2xl text-1xl`}><NavLink to='/about'>About</NavLink></li>
          <li className={`text-white md:text-2xl text-1xl`}><NavLink to='/project'>Project</NavLink></li>
          <li className={`text-white md:text-2xl text-1xl`}><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar