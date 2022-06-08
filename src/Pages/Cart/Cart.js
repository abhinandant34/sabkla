import React from 'react'
import Checkout from '../components/Checkout/Checkout'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'

function Cart() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Checkout/>
      <Footer/>      
    </div>
  )
}

export default Cart