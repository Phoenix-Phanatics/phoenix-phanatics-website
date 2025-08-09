import { useState } from 'react'
import Header from './header'
import About from './about'
import FRC from './frc'
import Sponsors from './sponsors'
import Events from './events'

function App() {
  return (
    <div className='h-fit w-dvw grid grid-cols-3 grid-rows-5 items-start justify-items-stretch gap-8 p-4'>
      <Header />
      <About />
      <FRC />
      <Sponsors />
      <Events />
    </div>
  )
}

export default App
