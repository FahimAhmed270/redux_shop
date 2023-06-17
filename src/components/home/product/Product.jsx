import React, { useState } from 'react'
import Heading from '../../common/Heading'
import ProductItems from './ProductItems'
import { products } from '../../assets/data/data'

const Product = () => {
  const [cartItems, setCartItems] = useState(products)
  return (
    <>
      <section className="product">
        <div className="container">
          <Heading title='Trendings Products' des='Check the hottest designs of the week. These rising stars are worth your attention.' />
          <ProductItems cartItems={cartItems}/>
        </div>
      </section>
    </>
  )
}

export default Product
