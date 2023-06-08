import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="bg-[#262626] fixed top-0 left-0 w-screen z-[1000]">
      <nav className="max-w-[1200px] py-3 mx-auto">
        <ul className="flex justify-center items-center">
          <li className='hover:bg-[#1a1a1a] py-2 px-6 rounded-[5px]'><NavLink to='/' className="text-gray-400 md:text-2xl text-1xl">Home</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px]'><NavLink to='/about'className="text-gray-400 md:text-2xl text-1xl">About</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px]'><NavLink to='/project'className="text-gray-400 md:text-2xl text-1xl">Project</NavLink></li>
          <li className='hover:bg-[#111111] py-2 px-6 rounded-[5px]'><NavLink to='/contact'className="text-gray-400 md:text-2xl text-1xl">Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar


// className={`text-white md:text-2xl text-1xl`}
// className={`text-white md:text-2xl text-1xl`}
// className={`text-white md:text-2xl text-1xl`}
