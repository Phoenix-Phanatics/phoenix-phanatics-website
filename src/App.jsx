import { useState } from 'react'
import Header from './header'
import About from './about'
import FRC from './frc'
import Sponsors from './sponsors'

function App() {
  return (
    <div className='bg-gradient-to-br from-purple-900 to-blue-950 h-fit w-dvw grid grid-cols-3 grid-rows-4 items-start justify-items-stretch gap-8 p-4'>
      <Header />
      <About />
      <FRC />
      <Sponsors />
    </div>
  )
}

export default App
