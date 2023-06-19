import React from 'react'
import Banner from './banner/Banner'
import Card from './Hero/Card'
import Hero from './Hero/Hero'
import Price from './price/Price'
import Product from './product/Product'
import Testimonial from './testimonial/Testimonial'
import TopProduct from './top/TopProduct'

const Home = () => {
  return (
    <div>
      <Hero />
      <Card/>
      <Product/>
      <Banner/>
      <TopProduct/>
      <Price/>
      <Testimonial/>
    </div>
  )
}

export default Home
