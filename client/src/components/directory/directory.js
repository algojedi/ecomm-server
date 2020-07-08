import React from 'react'
import MenuItem from '../menu-item/menu-item'
import './directory.scss'
import { useSelector } from 'react-redux'

// a component that presents all the categories for shopping: mens, womens, hats, etc..
// currently displayed on the homepage
function Directory() {
   const { sections } = useSelector(state => state.directory) 
    return (
        <div className='directory-menu'>
            {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                <MenuItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    size={size}
                    linkUrl={linkUrl}
                    className='directory-menu_item'
                />
            ))}
        </div>
    )
}

export default Directory
