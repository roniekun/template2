import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/", )
    setTimeout(() => {
          window.scrollTo({top: 0, behavior:"smooth"})
    }, 300);
  }
  return (
    <main
    className='cursor-pointer'
     onClick={handleClick}>
      <h1 className='font-medium md:text-xl text-lg bg-slate-950 text-neutral-50 p-1'>
      Studio.
      </h1>
    </main>
  )
}

export default Logo