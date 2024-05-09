import { useParams, Link, useLocation } from 'react-router-dom'
import { lettersComp } from '../../utils/letters'
import { useContext, useRef   } from 'react'
import { DataContext } from '../../context/DataContext'
import Socials from './assets/Socials'
import Clock from './assets/Clock'

const Navbar = () => {
    const {setToggleMenu, isToggleMenu} = useContext(DataContext)
    const location = useLocation()
    const menu = useRef(null)
    const linkItems= useRef(null)

    const links = [
         { name: 'about', to: '/about' },
        { name: 'contact', to: '/contact' },
    ];

  return (
    <nav
     ref={menu}
     className='fixed w-screen z-40 flex h-screen  flex-col gap-16 items-center justify-center bg-slate-500 overflow-hidden'>
  
        <section
          ref={linkItems}
          className='flex flex-col w-fit justify-start relative mt-5 items-center text-xl h-auto gap-7 opacity-1'>
        
                {links.map((link, idx) => (
                <div className='flex w-fit justify-start relative items-start group h-10 overflow-hidden'>
                    <Link
                    to={link.to}
                    className={`relative bg-transparent cursor-pointer text-[8vh] font-medium capitalize font-tertiary flex text-balance leading-10 w-fit select-none ${link.to===location.pathname ? 'text-indigo-400' : 'text-black'} `}
                    key={link.name}>
                     {link.name} 
                                    {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                    ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
                    </Link>
                 </div>
            ))}

        </section>

    </nav>
  )
}

export default Navbar