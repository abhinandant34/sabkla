import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider";

function Product({id,title, image, price,rating}) {
    const[{cart}, dispatch]=useStateValue();

    console.log("this is the cart >>>", cart);

        const addToCart = ()=> {
            dispatch({
                type: "ADD_To_CART",
                item: {
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating,
                },
            });

        };

    return (
        <div className='product'>
            <div className="product__info">
   
                <img className="product__image" src={image}/>
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
              
                <div className="product__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) =>(
                            <p>★</p>
                        ))}
             
             </div>
                <button className="product__addtocart" onClick={addToCart}>Add to Cart</button>
            </div>
 
        </div>
    )
}

export default Product
