
import React, { forwardRef, useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const Modal = forwardRef((props, ref) => { 
    // regular ref can not attach to react elements, therefore: forwardRef
    const [display, setDisplay] = React.useState(false)

    // useImpHandle allows us to attach methods to the ref
    useImperativeHandle(ref, () => {
        return {
            openModal: () => open(),
            close: () => close(),
        }
    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
            <div className={'modal-wrapper'}>
                <div onClick={close} className={'modal-backdrop'} />
                <div className={'modal-box'}>{props.children}</div>
            </div>,
            document.getElementById('portal')
        )
    }

    return null
})

export default Modal
