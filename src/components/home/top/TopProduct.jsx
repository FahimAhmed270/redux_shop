import React, { useState } from 'react'
import Heading from '../../common/Heading'
import { topProducts } from '../../assets/data/data'
import ProductItems from '../product/ProductItems'

const TopProduct = () => {
  const [cartItems, setCartItems] = useState(topProducts)
  const allCategory = ['All', ...new Set(cartItems.map((item)=> item.category))]

  const [category, setCategory] = useState(allCategory)

  const handleFilter=(category)=>{
    const newItem = topProducts.filter((item)=> item.category === category)
    setCartItems(newItem)

    if(category === 'All'){
      setCartItems(topProducts)
    }
  }
  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading title='Top Selling Products' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />
            <div className="category">
              {
                category.map((category, id) => (
                  <button className='button' key={id} onClick={() => handleFilter(category)}>
                    {category}
                  </button>
                ))
              }
            </div>
          </div>
          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  )
}

export default TopProduct
