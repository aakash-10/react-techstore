import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import singleProductImg from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context'

function SingleProductPage() {
    return (
        <>
            <Hero img={singleProductImg} title="SINGLE PRODUCT">
            </Hero>
                <ProductConsumer>
                    {value=>{
                        const {singleProduct,addToCart,loading} = value
                        if(loading){
                            console.log("hello from loading")
                            return (
                                <h1>Product Loading...</h1>
                            )

                        }
                        const {company,description,id, price,title,image} = singleProduct
                        return(
                            <section className="py-5">
                                <div className="container">
                                <div className="row">
                            <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                            <img src={`../${image}`} alt="single Product" className="img-fluid"/>

                            </div>

                                        <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">

                        <h5 className="text-title mb-4">Model: {title}</h5>
                        <h5 className="text-capitalize text-muted mb-4">Brand: {company}</h5>
                        <h5 className="text-main text-capitalize">Price: Rs.{price}</h5>

                        <p className="text-capitalize text-title mt-3">
                            Some info about Product:
                        </p>
                        <p>{description}</p>

                        <button type="button" className="main-link" style={{margin:'0.75rem'}}
                        onClick={()=>addToCart(id)}>Add To Cart</button>

                        <Link to="/products" className="main-link" style={{margin:"0.75rem"}}>
                            Back to Products
                        </Link>
                            


  
                                        </div>

                                </div>

                                </div>

                            </section>
                        )
                    }}
                </ProductConsumer>


          
        </>
    )
}

export default SingleProductPage
