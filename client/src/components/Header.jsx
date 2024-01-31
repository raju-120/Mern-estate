import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
          <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Real</span>
                <span className='text-slate-700'>State</span>
            </h1>
          </Link>
          <form className='bg-slate-100 flex items-center rounded-lg p-3'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600'/>
          </form>
          <ul className='flex gap-6'>
            <Link to='/'>
              <li className='hidden sm:inline text-black hover:underline hover:text-slate-600'>Home</li>
            </Link>

            <Link to='/about'>
              <li className='text-black hover:underline hover:text-slate-600'>About</li>
            </Link>

            <Link to='/sign-in'>
              <li className='text-black hover:underline hover:text-slate-600'>Sign in</li>
            </Link>
          </ul>
        </div>
    </header>
  )
}
