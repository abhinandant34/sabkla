import React from 'react'
import './Card.css'
import { useStateValue } from '../../StateProvider';

function Card(parse) {
    const[{cart}, dispatch]=useStateValue();
    const addToCart = ()=> {
        dispatch({
            type: "ADD_To_CART",
            item: {
                title:"hello"
            },
        });

    };
  return (
    <div>
        <div className='card'>
        <div className='card-title'>
            {parse.title}
        </div>
        <div className='card-img'>
            <img src={parse.img}/>
        </div>
    </div>
    <div className='card-btn'  onClick={addToCart}>
        Buy Now
    </div>
    </div>
  )
}

export default Card