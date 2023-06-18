import React from 'react'
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"

const SearchItems = ({ products, value, onSearch }) => {
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {
            products.filter((items) => {
              const searchKey = value.toLowerCase()
              const title = items.title.toLowerCase()

              return searchKey && title.startsWith(searchKey) && title !== searchKey
            }).slice(0, 10)
              .map((items) => (
                <div className="box" key={items.id}>
                  <div className="img">
                    <img src={items.cover} alt="" />
                    {/* <div className="overlay">
                      <button className='button'>
                        <FiShoppingBag />
                      </button>
                      <button className='button'>
                        <AiOutlineHeart />
                      </button>
                      <button className='button' onClick={() => openImg(items.cover)}>
                        <FiSearch />
                      </button>
                    </div> */}
                  </div>
                  <div className="details">
                    <h3>{items.title}</h3>
                    <p>{items.author}</p>
                    <h4>${items.price}</h4>
                  </div>
                </div>
              ))
          }
        </div>
      </section>
    </>
  )
}

export default SearchItems
