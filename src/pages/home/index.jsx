import { motion } from 'framer-motion'
import { DataContext } from '../../context/DataContext'
import { useRef, useEffect, useContext } from 'react'
import PageTransition from '../../assets/anim/PageTransition'
import { Link } from 'react-router-dom'

const Home = () => {
  const {setTitle, user} = useContext(DataContext)
  useEffect(() => {
    location.title = 'Home'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])

  return (
  <PageTransition>
      <motion.main
        className='relative flex flex-col top-0'>
        <section className='min-h-screen flex flex-col py-5'>
         <div className='px-[5vw] mt-28'>
          <span className='text-2xl indent-10 md:indent-20 text-balance'>
              Amet blanditiis quam aliquam, at molestias, ducimus veritatis placeat expedita nesciunt debitis eligendi accusamus odio. Nemo fuga corporis consectetur.
         </span>
         </div>
          <div className='h-[500px] border rounded-lg border-slate-500 my-10 mx-[5vw]'>
            <img src="" alt="" />
          </div>
          <Link to="/gallery"
            onClick={()=> window.scrollTo({top}) }
            className='self-center relative text-center w-fit border p-1 m-1'>View Gallery</Link>
        </section>
    </motion.main>
  </PageTransition>
  )
}

export default Home