import { motion } from 'framer-motion'
import { DataContext } from '../../context/DataContext'
import { useRef, useEffect, useContext } from 'react'
import Footer from '../../component/footer'

const Home = () => {
  const {setTitle, user} = useContext(DataContext)
  useEffect(() => {
    location.title = 'Home'
    setTitle(`${location.title} - ${user.title} `)
  }, [location.pathname])

  const handleClick = () => {
    console.log("navigate to gallery")
  }

  return (
      <motion.main
        className='relative flex flex-col top-0'>
        <section className='min-h-screen flex flex-col py-5'>
         <div className='px-[5vw] mt-28'>
          <span className='text-2xl indent-10 md:indent-20 text-balance bg-gradient-to-l  bg-clip-text text-transparent from-pink-500 via-blue-800 to-black'>
              Amet blanditiis quam aliquam, at molestias, ducimus veritatis placeat expedita nesciunt debitis eligendi accusamus odio. Nemo fuga corporis consectetur.
         </span>
         </div>
          <div className='h-[500px] border rounded-lg border-slate-500 my-10 mx-[5vw]'>
            <img src="" alt="" />
          </div>
          <button 
            onClick={handleClick}
            className='self-center relative text-center w-fit border p-1 m-1'>View Gallery</button>
        </section>

      {/* footer */}
      <section 
      className='z-10'>
      <div></div>
        <div className='lg:col-span-2 sm:w-full'>
              <Footer />
        </div>
      </section>
    </motion.main>
  )
}

export default Home