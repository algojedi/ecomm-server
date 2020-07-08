import React, { useState } from 'react'
import './footer.scss'
import { FaPlus, FaMinus } from "react-icons/fa";

function Footer() {
    const [openSupport, setOpenSupport] = useState(false)
    const [openServices, setOpenServices] = useState(false)
    const [openAbout, setOpenAbout] = useState(false)
    return (
        <div className='footer'>
            <div className='footer_item'>
                <div className='footer_item_title' onClick={() => setOpenSupport(t => !t)}>
                <div>
                    Customer Support
                </div>
                <div className='footer_item_title--btn'>
                {  openSupport ? 
                    <FaMinus/> :
                    <FaPlus/> 
                }
                </div>
                </div>
                <ul className={`footer_item_list ${openSupport ? '' : 'hide'}`}>
                    <li className='footer_item_list_item'>Contact Us</li>
                    <li className='footer_item_list_item'>Help and FAQs</li>
                    <li className='footer_item_list_item'>Shipping / Returns</li>
                </ul>
            </div>

            <div className='footer_item'>
                <div className='footer_item_title' onClick={() => setOpenServices(t => !t)}>
                <div>
                   Services
                </div>
                <div className='footer_item_title--btn'>
                {  openServices ? 
                    <FaMinus/> :
                    <FaPlus/> 
                }
                </div>
                </div>
                <ul className={`footer_item_list ${openServices ? '' : 'hide'}`}>
                    <li className='footer_item_list_item'>Credit</li>
                    <li className='footer_item_list_item'>Financial Services</li>
                    <li className='footer_item_list_item'>Gift Cards</li>
                </ul>
            </div>

            <div className='footer_item'>

                <div className='footer_item_title' onClick={() => setOpenAbout(t => !t)}>
                <div>
                   About
                </div>
                <div className='footer_item_title--btn'>
                {  openAbout ? 
                    <FaMinus/> :
                    <FaPlus/> 
                }
                </div>
                </div>
                <ul className={`footer_item_list ${openAbout ? '' : 'hide'}`}>
                    <li className='footer_item_list_item'>Careers</li>
                    <li className='footer_item_list_item'>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
