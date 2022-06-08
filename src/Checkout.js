import React from 'react'
import "./Checkout.css"
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./Pages/StateProvider";
import Subtotal from "./Subtotal";
import Card from './Pages/components/Products/Card/Card'

function Checkout() {

    const[{cart},dispatch] = useStateValue();

    return (
        <div className="checkout">
        
        <div className="checkout__left">

            

   
                <h2 className="checkout__title">YOUR  SHOPPING CART</h2>
            
            {cart.map(item =>(
                <Card
                    title={item.title}
                    img={item.image}
                />
            ))}

        </div>

        <div className="checkout__right">

                <Subtotal/>

        </div>
    
        
    </div>
    )
}

export default Checkout
