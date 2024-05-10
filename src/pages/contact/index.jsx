import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import PageTransition from '../../assets/anim/PageTransition'

const Contact = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Info'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

  return (
    <PageTransition>
      <main className='min-h-screen bg-gray-100'>
        <div className='h-screen'>
          Contact
        </div>
      </main>
    </PageTransition>
  )
}

export default Contact