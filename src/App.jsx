import { useState } from 'react'
import Header from './header'
import About from './about'

function App() {
  return (
    <div className='bg-gradient-to-br from-purple-900 to-blue-950 h-fit w-dvw grid grid-cols-2 grid-rows-5 items-center justify-items-center'>
      <Header />
      <About />
    </div>
  )
}

export default App
