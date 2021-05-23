import React from 'react'
import "./Product.css"

function Product({title, image, price,rating}) {
    return (
        <div className='product'>
            <div className="product__info">
                
                <img className="product__image" src={image}/>
                <p>{title}</p>
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
             
                    
                <p>

                <button className="product__addtocart">Add to Cart</button>

                </p>        
                </div>

            </div>
            
        </div>
    )
}

export default Product
