
import './collection-item.scss'
import React from 'react'
import CustomButton from '../custom-btn/custom-btn'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/actions/actions'

const CollectionItem = ({ item }) => { 
    const dispatch = useDispatch()
    const {  name, price, imageUrl } = item
    return (
    <div className='collection-item'>
        <div
            className='collection-item_image'
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        />
        <div className='collection-item_footer'>
            <span className='collection-item_footer_name'>{name}</span>
            <span className='collection-item_footer_price'>{price}</span>
        </div>
        <div className="collection-item_btn" onClick={() => { dispatch(addItem(item))}}>
            <CustomButton opaque="true">Add to Cart</CustomButton>
        </div>
    </div>
) }

export default CollectionItem
