import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import BeefChicken from './sections/BeefChicken'
import BurgerHealth from './sections/BurgerHealth'
import MenuList from './sections/MenuList'
import Favorite from './sections/Favorite'
import ChipsDrink from './sections/ChipsDrink'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BeefChicken />
      <BurgerHealth />
      <MenuList />
      <Favorite />
      <ChipsDrink />
      <Footer />
    </div>
  )
}

export default App