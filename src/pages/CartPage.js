import React from 'react'
import CartSection from '../components/cartPage'
import Hero from '../components/Hero'
import CartBcg from '../images/storeBcg.jpeg'

function CartPage() {
    return (
        <>
            <Hero img={CartBcg}></Hero>
            <CartSection></CartSection>
        </>
    )
}

export default CartPage
