import React from 'react'
import './Checkout.css'
import { useStateValue } from '../../StateProvider';
import Card from '../../components/Products/Card/Card'
function Checkout() {
    const[{cart},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='cart-header'>My Cart</div>
        {cart.map(item =>(
                <Card
                    title={item.title}
                    image={item.image}
                />
            ))}
    </div>
  )
}

export default Checkout