import { useParams, Link, useLocation } from 'react-router-dom'
import { useContext, useRef   } from 'react'
import { DataContext } from '../../context/DataContext'
import {motion , AnimatePresence } from 'framer-motion'
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
    ]

    const handleClick = () => {
      setToggleMenu(false)
    }
  return (
    <AnimatePresence>
      {isToggleMenu && 
      <motion.nav
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        ref={menu}
        className='fixed w-screen z-40 flex h-screen opacity-0  flex-col gap-16 items-center justify-center bg-neutral-100 
        overflow-hidden'>
    
          <section
            ref={linkItems}
            className='flex flex-col w-fit justify-start relative mt-5 items-center text-xl h-auto gap-5 opacity-1'>
          
                  {links.map((link, idx) => (
                  <div className='flex w-fit justify-center relative items-center group overflow-hidden'>
                      <Link
                      onClick={handleClick}
                      to={link.to}
                      className={`relative bg-transparent cursor-pointer text-[7vh] h-normal font-normal capitalize font-tertiary flex text-balance leading-10 w-fit select-none ${link.to===location.pathname ? 'text-indigo-400' : 'text-black'} `}
                      key={link.name}>
                      {link.name} 
                                      {/* <span className={`absolute -bottom-1 h-[3px] w-full  
                                      ${link.to===location.pathname ? 'bg-orange-500' : 'bg-gray-100'} rounded-lg scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left`}></span> */}
                      </Link>
                  </div>
              ))}
          </section>
      </motion.nav>
      }
    </AnimatePresence>
  )
}

export default Navbar