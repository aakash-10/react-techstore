import React from 'react'
import {ProductConsumer} from '../../context'
import Title from '../title'
import Product from '../Product'



function Products() {
    return (
       <ProductConsumer>
           {value=>{
                const { filteredProducts} = value
                return (

                    <section className="py-5">
                        <div className="container">
                    <Title center title="Our Products"></Title>
                    <div className="row py-5">
                        {filteredProducts.map(product => {
                            return(
                                <Product key={product.id} product={product}></Product>
                            )
                        })}

                    </div>
                        </div>

                    </section>
                )
           }}
       </ProductConsumer>
    )
}

export default Products
