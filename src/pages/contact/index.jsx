import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Contact = () => {
    const { user, setTitle } = useContext(DataContext)

      useEffect(() => {
        location.title = 'Info'
        setTitle(`${location.title} - ${user.title}`)
      }, [location.pathname])

  return (
    <PageAnimator>
      <main className='min-h-screen bg-gray-100'>
        <div className='h-screen'></div>
      </main>
    </PageAnimator>
  )
}

export default Contact