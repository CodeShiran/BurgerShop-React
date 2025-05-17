import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import BeefChicken from './sections/BeefChicken'
import BurgerHealth from './sections/BurgerHealth'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BeefChicken />
      <BurgerHealth />
    </div>
  )
}

export default App