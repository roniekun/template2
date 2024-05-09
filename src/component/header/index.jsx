import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Logo from './assets/Logo'
import Nav from './assets/Nav2'
import { Cross as Hamburger } from 'hamburger-react'  // https://hamburger-react.netlify.app/


const Header = () => {
  const {isMobile, setToggleMenu, isToggleMenu} = useContext(DataContext)
  return (
    <main className='flex justify-between items-center px-5 z-50 fixed top-0 w-screen py-2 h-16 border-b-2 bg-neutral-100'>
      <div className='z-50'><Logo /></div>
       <div>{!isMobile ? <Nav /> :
       <Hamburger toggled={isToggleMenu} toggle={setToggleMenu} rounded="true" size={22}/>}
       </div>
    </main>
  )
}

export default Header