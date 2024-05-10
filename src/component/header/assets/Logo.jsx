import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  const handleClick=()=>{
      window.scrollTo({top: 0})
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