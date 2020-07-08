import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100 // needs to be converted to cents
    const publishableKey = 'pk_test_51GvrFqE6GlG2dnFlIslK8vDuFJtuxPdKwjtRZoVM3Cej9ZiydzWx2WvUSVfutdvAFsgx3dlX403rjkmXF5UEpM0F00NdZSnsvT'
    const onToken = (token) => {
        console.log(token)
        alert('Payment Succesful!') // token would be processed on back end
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Company Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
