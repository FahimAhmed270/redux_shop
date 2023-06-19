import React from 'react'
import Heading from '../../common/Heading'
import { customer } from '../../assets/data/data'
import { ImQuotesRight } from "react-icons/im"

const Testimonial = () => {
  return (
    <>
      <section className="customer">
        <Heading title='Choose The Plans' des='Meet our newbies! The latest templates uploaded to the marketplace.' />
        <div className="content">
          {
            customer.map((item) => (
              <div className="card" key={item.id}>
                <button><ImQuotesRight /></button>
                <p>"{item.desc}"</p>
                <h3>{item.name}</h3>
                <span>{item.post}</span>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Testimonial
