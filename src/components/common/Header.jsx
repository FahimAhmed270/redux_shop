import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { BiSearch } from "react-icons/bi"
import { BsBagCheck } from "react-icons/bs"
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart, AiOutlineMenu, AiOutlineClose, AiOutlineDelete } from "react-icons/ai"
import { navlist } from '../assets/data/data'

const Header = () => {
  // navbar
  const [mobile, setMobile] = useState(false)
  // scroll navbar
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  return (
    // 1st step to setup header section
    <>
      <header className="header">
        <div className="container">
          <nav>

            {/* mobile menu toggle navigation */}
            <div className="toggle">
              <button onClick={()=> setMobile(!mobile)}>
              {mobile ? <AiOutlineClose className='close heIcon'/> : <AiOutlineMenu className='open heIcon'/>}
              </button>
            </div>

            {/* left side */}
            <div className="left">
              <Link to='/'>
                <img src={logo} alt="" />
              </Link>
            </div>

            {/* center side */}
            <div className="center">
              <ul className={mobile ? 'mobile-nav' : 'menu'}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* right side */}
          <div className="right">
            <div className='right_search'>
              <input type='text' placeholder='Search Products...' />
              <BiSearch className='serachIcon heIcon' />
            </div>
            <div className='right_user'>
              <RiUser3Line className='userIcon heIcon' />
              <AiOutlineHeart className='userIcon heIcon' />
            </div>
            {/* right card design */}
            <div className="right_card">
            <button className='button'>
                <BsBagCheck className='shop heIcon' />
                MY CART<span>(0)</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
