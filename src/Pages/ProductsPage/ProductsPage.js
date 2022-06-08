import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Products from '../components/Products/Products'


function ProductsPage() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default ProductsPage