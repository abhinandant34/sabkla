import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className="checkout">
        
        <div className="checkout__left">

            <div className="checkout__title">
                <h2>YOUR CART</h2>
            </div>

        </div>

        <div className="checkout__right">

                <Subtotal/>

        </div>
    
        
    </div>
    )
}

export default Checkout
