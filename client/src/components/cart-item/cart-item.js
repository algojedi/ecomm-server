import React from 'react'

import './cart-item.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='cart-item_details'>
            <span className='cart-item_details_name'>{name}</span>
            <span className='cart-item_details_price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
)

export default CartItem
