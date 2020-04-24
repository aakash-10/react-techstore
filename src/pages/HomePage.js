import React from 'react'
import {ProductConsumer} from '../context'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <>
         <Hero title="Gadgets" max="true"> 
             <Link to="/products" className="main-link" 
             style={{margin: "2rem"}}>Our Products</Link>
         </Hero>
        </>
    )
}

export default HomePage
