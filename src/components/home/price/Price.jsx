import React from 'react'
import Heading from '../../common/Heading'
import { price } from '../../assets/data/data'

const Price = () => {
  return (
    <>
      <section className="price">
        <Heading title='Choose The Plans' des='Meet our newbies! The latest templates uploaded to the marketplace.' />
      
        <div className="content">
          {
            price.map((item) => (
              <div className="box" key={item.id}>
                <h3>{item.name}</h3>
                <h1>
                  <span>$</span>
                  {item.price}
                  <label htmlFor="">/user per month</label>
                </h1>
                <p>{item.desc}</p>
                <button className='button'>GET STATRED</button>
                <ul>
                  {
                    item.list.map((list, i) => (
                      <li key={i}>
                        <i>{list.icon}</i>
                        <span>{list.para}</span>
                      </li>
                    ))
                  }
                </ul>

              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Price
