import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from './header'
import About from './about'
import FRC from './frc'
import Sponsors from './sponsors'
import Events from './events'
import Footer from './footer'

function App() {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  }

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <div className='flex flex-col items-center justify-start font-mozilla bg-main-bg'>
      <Header />
      
      {/* Content section with staggered animation */}
      <motion.div 
        ref={contentRef}
        className='h-fit w-11/12 max-w-[1600px] grid xl:grid-cols-3 xl:grid-rows-2 grid-rows-4 items-stretch justify-items-stretch gap-8 md:gap-12 lg:gap-16 p-4 md:p-8 my-16'
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}><About /></motion.div>
        <motion.div variants={itemVariants}><FRC /></motion.div>
        <motion.div variants={itemVariants} className='md:row-span-2'><Sponsors /></motion.div>
        <motion.div variants={itemVariants} className="xl:col-span-3"><Events /></motion.div>
      </motion.div>
      
      <Footer />
    </div>
  )
}

export default App
