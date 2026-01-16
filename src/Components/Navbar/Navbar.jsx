import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { LiaShoppingBagSolid } from 'react-icons/lia'
import { MdOutlineRectangle } from 'react-icons/md'
import { RiRectangleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = ({ cartCount }) => {
  return (
    <div>
      <nav className="bg-purple-600 w-full shadow-md px-6 py-3 flex items-center justify-between ">
        
        {/* Left rectangle with title */}
        <div className="flex items-center text-white">
  <RiRectangleLine size={42} className="relative top-[2px]" />
  <span className="text-4xl leading-none -ml-1 ">The Plaza</span>
</div>

        {/* Nav Links */}
        <div className="flex space-x-8 font-medium text-white -ml-100">
          <Link to="/">HOME</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/">WOMAN</Link>
          <Link to="/">MAN</Link>
          <Link to="/lookbook">LOOKBOOK</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-6 mr-20">
          {/* Cart icon with badge */}
          <Link to="/cart" className="relative inline-block">
            <LiaShoppingBagSolid size={40} className="text-white" />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-red-600 text-white 
                           text-xs font-bold w-5 h-5 flex items-center 
                           justify-center rounded-full"
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Search icon */}
          <IoIosSearch size={22} className="text-white" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
