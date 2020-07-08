import React from 'react'
import './homepage.scss'
import bannerPic from '../../assets/banner-photo-lg.jpg'
import Directory from '../../components/directory/directory'

function HomePage() {
    return (
        <main className='homepage'>
            <Directory />
            <section className='homepage_banner'>
                <img
                    className='homepage_banner_photo'
                    src={bannerPic}
                    alt='banner'
                />
                <div className='homepage_banner_msg'>
                    <h3 className='homepage_banner_msg_title'>
                        Shop Online Pick Up Curbside
                    </h3>
                    <p className='homepage_banner_msg_details'>
                        In As Little As 3 Hours. Daily from 10:00 AM to 5:00 PM
                    </p>
                    <button className='homepage_banner_msg_btn'>DETAILS</button>
                </div>
            </section>
        </main>
    )
}

export default HomePage
