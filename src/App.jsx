import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './assets/Css/Style.css'
import ShoopingCart from './Pages/ShoopingCart/ShoopingCart'
import ProductSection from './Pages/ProductSection/ProductSection'
import ContactPage from './Pages/ContactPage/ContactPage'
import LookbookPage from './Pages/LookbookPage/LookbookPage'
import BlogPage from './Pages/BlogPage/BlogPage'
const App = () => {
  return (
    <div>
      <Navbar cartCount={2}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoopingCart />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/contact" element={<ContactPage  />} />
        <Route path="/lookbook" element={<LookbookPage  />} />
        <Route path="/blog" element={<BlogPage  />} />
      </Routes>
      
    </div>
  )
}

export default App
