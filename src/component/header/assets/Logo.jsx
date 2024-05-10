import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../context/DataContext'

const Logo = () => {
  const {setToggleMenu} = useContext(DataContext)
  const handleClick=()=>{
      window.scrollTo({top: 0})
      setToggleMenu(false)
  }
  return (
    <Link
     to="/"
    className='cursor-pointer'
     onClick={handleClick}>
      <h3
       className='font-medium md:text-xl text-lg bg-slate-950 text-neutral-50 p-1'>
      Studio.
      </h3>
    </Link>
  )
}

export default Logo