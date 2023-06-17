import React from 'react'

const Heading = ({title, des}) => {
  return (
    <>
      <div className="heading">
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
    </>
  )
}

export default Heading
