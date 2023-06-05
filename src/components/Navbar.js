import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-transparen bg-gray-400 w-full h-20 fixed top-0 left-0 z-10'>
        <nav className=' max-w-[1200px] w-[90%] mx-auto h-full flex justify-between items-center'>
          <h1 className='text-3xl font-bold uppercase text-white'>
            <Link to='/'>s<span className='text-slate-400'>a</span>naj<span className='text-slate-400'>a</span>ni</Link>
          </h1>
            <ul className='text-center h-full'>
                <li className='inline-block my-4 mx-6'><Link className='text-2xl text-white hover:text-gray-500 transition-all'  to='/'>Home</Link></li>
                <li className='inline-block my-4 mx-6'><Link className='text-2xl text-white hover:text-gray-500 transition-all'  to='/about'>About</Link></li>
                <li className='inline-block my-4 mx-6'><Link className='text-2xl text-white hover:text-gray-500 transition-all'  to='/services'>Services</Link></li>
                <li className='inline-block my-4 mx-6'><Link className='text-2xl text-white hover:text-gray-500 transition-all'  to='/project'>Projects</Link></li>
                <li className='inline-block my-4 mx-6'><Link className='text-2xl text-white hover:text-gray-500 transition-all'  to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar