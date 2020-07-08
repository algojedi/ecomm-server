import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item/collection-item'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='collection-preview_title'>{title.toUpperCase()}</h1>
        <div className='collection-preview_collection'>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item._id} item={item} />
                ))}
        </div>
    </div>
)

export default CollectionPreview
