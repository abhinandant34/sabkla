import React from 'react'
import '../Card/Card.css'
import { useStateValue } from "../../../StateProvider";

function Product({title, image}) {
    const[{cart}, dispatch]=useStateValue();

    console.log("this is the cart >>>", cart);

        const addToCart = ()=> {
            dispatch({
                type: "ADD_To_CART",
                item: {
                    title:title,
                    image:image,
                },
            });

        };

    return (
        <div>
        <div className='card'>
        <div className='card-title'>
            {title}
        </div>
        <div className='card-img'>
            <img src={image}/>
        </div>
    </div>
    <div className='card-btn' onClick={addToCart}>
        Buy Now
    </div>
    </div>
        // <div className='product'>
        //     <div className="product__info">
   
        //         <img className="product__image" src={image}/>
        //         <p className="product__title">{title}</p>
        //         <p className="product__price">
        //             <small>Rs </small>
        //             <strong>{price}</strong>
        //         </p>
              
        //         <div className="product__rating">
        //                 {Array(rating)
        //                 .fill()
        //                 .map((_, i) =>(
        //                     <p>★</p>
        //                 ))}
             
        //      </div>
        //         <button className="product__addtocart" onClick={addToCart}>Add to Cart</button>
        //     </div>
 
        // </div>
    )
}

export default Product
