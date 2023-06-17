import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"
// import { products } from "../../assets/data/data"
import SearchItems from "./SearchItems"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <h1>
          <label htmlFor="">Over <span>6,500</span> Curated Design</label>
          <label htmlFor=""> Resources, <span>Graphic & Website </span> Templates</label>
        </h1>
        <p>High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.</p>
        <div className="search">
          <span>All Categories</span> <hr />
          <input type="text" placeholder="Search..." />
          <button>
            <BiSearch className='serachIcon heIcon' />
          </button>
        </div>
        <SearchItems/>
        <p>Examples: Mockup, PSD, Theme Design, Image…</p>
      </section>
    </>
  )
}

export default Hero
