import React from 'react'
import { useEffect, useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import Footer from '../../component/footer'
import PageAnimator from '../../assets/anim/PageTransition'

const Pricing = () => {
  const { user, setTitle } = useContext(DataContext)

  useEffect(() => {
    location.title = 'Pricing'
    setTitle(`${location.title} - ${user.title}`)
  }, [location.pathname])

  return (
    <PageAnimator>
      <main className='min-h-screen bg-gray-100'>
      <div className='h-screen'></div>
      <section className='relative'>
              <Footer />
      </section>
      </main>
    </PageAnimator>
  )
}

export default Pricing