import React from 'react'
import { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Marquee = () => {
    const [ active, setActive ] = useState(true)
    const container = useRef(null);
    const slider = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);

      useLayoutEffect(() => {
        if(!active){
        gsap.to(container.current,{
            height: 'auto'
        })
         }
         else{
             gsap.to(container.current,{
            height: 'auto'
          })
         }
        setTimeout(() => {
            setActive(false)
        }, 5000);

    }, [active])

    useLayoutEffect( () => {
      if(active){
      let xPercent = 0
        // animation frame
            const animate1 = () => {
                if (xPercent > 0) {
                    xPercent = -100;
                }
                gsap.set(text1.current, { xPercent: xPercent });
                 gsap.set(text2.current, { xPercent: xPercent });
                 requestAnimationFrame(animate1)
                xPercent += 0.07;
            };
            gsap.set(text1.current, {left: text2.current.getBoundingClientRect().width})
            animate1()
      }
    }, [text1, text2, active ])


  return (
    <motion.main 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: .3, delay: .3}}
     ref={container} className='w-auto h-auto bg-yellow-500 z-20 relative overflow-hidden'>
        <div ref={slider} className='w-full flex h-full place-items-center' >
            <div className='flex h-auto text-nowrap text-xl w-full uppercase'>
                <h1 ref={text1} className='relative flex gap-x-24  px-12'>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span> 
                   <span> Website is working in progress.  </span> 
                   </h1>
                <h1 ref={text2} 
                className='absolute flex  gap-x-24 px-12'>
                   <span> Website is working in progress.  </span> 
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   <span> Website is working in progress.  </span>
                   </h1>
            </div>
        </div>
    </motion.main>
  )
}

export default Marquee