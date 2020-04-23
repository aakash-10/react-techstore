import React from 'react'
import {ProductConsumer} from '../context'

function HomePage() {
    return (
        <>
            <ProductConsumer>

                {value => {
                    console.log(value)
                    return (<h2>Hello from HomePage</h2>) 
}}
            </ProductConsumer>
        </>
    )
}

export default HomePage
