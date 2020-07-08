import React, { useState, useEffect } from 'react'
import './ticker.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function Ticker() {
    const [tickerDisplay, setTickerDisplay] = useState('Free In-store Pickup')
    const [tickerIndex, setTickerIndex] = useState(0)
    const [arrowClicked, setArrowClicked] = useState(false)
    const notices = [
        'Easy Returns within 30 Days of Purchase',
        'Free Shipping on $99+ Orders',
        'Free In-store Pickup',
    ]
    const handleClick = (side) => {
        setArrowClicked(true)
        switch (side) {
            case 'left':
                setTickerIndex(
                    tickerIndex === 0 ? notices.length - 1 : tickerIndex - 1
                )
                break

            case 'right':
                setTickerIndex(
                    tickerIndex === notices.length - 1 ? 0 : tickerIndex + 1
                )
                break

            default:
                console.log('something went wrong')
                break
        }
    }
    useEffect(() => {
        if (arrowClicked) {
            setTickerDisplay(notices[tickerIndex])
            setTickerIndex(
                tickerIndex === notices.length - 1 ? 0 : tickerIndex + 1
            )
            setArrowClicked(false)
            return
        }
        setTimeout(() => {
            setTickerDisplay(notices[tickerIndex])
            setTickerIndex(
                tickerIndex === notices.length - 1 ? 0 : tickerIndex + 1
            )
        }, 6000)
    }, [tickerIndex, notices, tickerDisplay, arrowClicked])

    return (
        <IconContext.Provider value={{ className: 'ticker-icons-provider' }}>
            <div className='ticker'>
                <FaChevronLeft onClick={() => handleClick('left')} />
                <div className='ticker_msg-wrapper'>{tickerDisplay}</div>
                <FaChevronRight onClick={() => handleClick('right')} />
            </div>
        </IconContext.Provider>
    )
}

export default Ticker
