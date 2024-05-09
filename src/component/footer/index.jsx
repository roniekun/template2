import React from 'react'
import SendGmail from '../../assets/SendGmail'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

const Footer = () => {
    const { user } = useContext(DataContext)
    const date = new Date()

    const handleClick = (user) =>{  
            SendGmail(user)
    }

  return (
  <footer className='h-auto relative min-h-[100px] w-full  grid lg:grid-cols-2 p-[5vw] bg-stone-200'>
    <h1 className='uppercase font-base'>all rights reserved {date.getFullYear()}</h1>
</footer>

  )
}

export default Footer