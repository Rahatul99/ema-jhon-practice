import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    
    console.log(cart);
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity =1;
        // }
        // console.log(product)
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            {/* <p>Cart length: {quantity}</p> */}
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;