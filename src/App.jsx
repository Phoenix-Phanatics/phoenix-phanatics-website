import { useState } from 'react'
import Header from './header'
import About from './about'
import FRC from './frc'
import Sponsors from './sponsors'
import Events from './events'
import Footer from './footer'

function App() {
  return (
    <div className='flex flex-col items-center justify-start gap-8'>
      <Header />
      <div className='h-fit w-11/12 grid grid-cols-3 grid-rows-3 items-stretch justify-items-stretch gap-16 p-4'>
        <About />
        <FRC />
        <Sponsors />
        <Events />
      </div>
      <Footer />
    </div>
  )
}

export default App
