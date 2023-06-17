import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Details  from '../home/details/Details'
import Home  from '../home/Home'

const Pages = ({cartItems}) => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home cartItems={cartItems}/>}/>
          <Route path='/cart/:id' element={<Details/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default Pages
