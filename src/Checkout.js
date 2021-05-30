import React from 'react'
import "./Checkout.css"
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {

    const[{cart},dispatch] = useStateValue();

    return (
        <div className="checkout">
        
        <div className="checkout__left">

            

   
                <h2 className="checkout__title">YOUR  SHOPPING CART</h2>
            
            {cart.map(item =>(
                <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
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
