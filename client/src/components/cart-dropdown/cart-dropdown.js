import React from 'react'
import CustomButton from '../custom-btn/custom-btn'
import './cart-dropdown.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/selectors/cart.selectors'
import { useHistory } from 'react-router-dom';
import { toggleCart } from '../../redux/actions/actions'

function CartDropdown({ dispatch, cartItems }) {
    const history = useHistory()
    console.log('the cart items prop coming to cart dropdown')
    console.log(cartItems)
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown_items'>
                {cartItems.length ? (
                    <div className='cart-dropdown_items_nonempty'>
                        {cartItems.map((cartItem) => (
                            <CartItem key={cartItem._id} item={cartItem} />
                        ))}
                        <div className='cart-dropdown_btn' onClick={() => {
                            dispatch(toggleCart())
                            history.push('/checkout')
                         }
                        } >
                            <CustomButton>Checkout</CustomButton>
                        </div>
                    </div>
                ) : (
                    <div className='cart-dropdown_empty-msg'>
                        No items in cart
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown)
