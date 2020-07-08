import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './menu-item.scss'

const MenuItem = ({ match, linkUrl, title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <Link to={`${match.url}${linkUrl}`}>
                <div
                    className='menu-item_background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
            </Link>
            <div className='menu-item_content'>
                <h1 className='menu-item_content_title'>
                    {title.toUpperCase()}
                </h1>
                <span className='menu-item_content_subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
