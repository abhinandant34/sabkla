import React from 'react'
import "./Checkoutproduct.css"
import { useStateValue } from "./StateProvider";

function Checkoutproduct({id,image,title,price,rating}) {

    const[{cart},dispatch] =  useStateValue();
    
        const removefromcart = () => {

            dispatch({
                type: 'REMOVE_FROM_CART',
                id: id,
            })

        }

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__image" src={image}/>
            <div className="checkoutproduct__info">
                    <p className="checkoutproduct__title">{title}</p>
                    <p className="checkoutproduct__price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutproduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) =>(
                            <p>★</p>
                        ))}

                    </div>
                    <button onClick={removefromcart}>Remove item form cart</button>
            </div>
            
        </div>
    )
}

export default Checkoutproduct
