import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Product from './Components/Product'
import Blog from './Components/Blog'
import Newsletter from './Components/Newsletter'
import Myfooter from './Components/Myfooter'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services/>
      <About/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <Myfooter/>
    </div>
  )
}

export default App