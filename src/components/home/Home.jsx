import React from 'react'
import Banner from './banner/Banner'
import Card from './Hero/Card'
import Hero from './Hero/Hero'
import Product from './product/Product'
import TopProduct from './top/TopProduct'

const Home = () => {
  return (
    <div>
      <Hero />
      <Card/>
      <Product/>
      <Banner/>
      <TopProduct/>
    </div>
  )
}

export default Home
