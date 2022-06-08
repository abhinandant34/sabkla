import React from 'react'
import './Checkout.css'
import { useStateValue } from '../StateProvider';
function Checkout() {
    const[{cart},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='cart-header'>My Cart</div>
        <table>
            <tr>
            <th>Item</th>
            <th>Option</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Item Total</th>
            </tr>
            {cart.map(item =>(
                <tr>
                    <td>{item.title}</td>
                    <td>Print Copy</td>
                    <td>150</td>
                    <td>1</td>
                    <td>150</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Checkout