import React from 'react'
import {ProductConsumer} from '../../context'
import Title from '../title'
import Product from '../Product'
import ProductFilter from './ProductFilter'



function Products() {
    return (
       <ProductConsumer>
           {value=>{
                const { filteredProducts} = value
                return (

                    <section className="py-5">
                        <div className="container">
                    <Title center title="Our Products"></Title>
                    {/* productfilter */}
                    <ProductFilter></ProductFilter>
                    {/* products */}
                    {/* row */}
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h6 className="text-title">
Total Products : {filteredProducts.length}

                            </h6>


                        </div>

                    </div>


{/* products */}

                    <div className="row py-5">
                    {filteredProducts.length === 0?(
                        <div className="col text-title text-center">
                           Sorry No Items Matched Your Search
                            </div>
                    ):

                       ( filteredProducts.map(product => {
                            return(
                                <Product key={product.id} product={product}></Product>
                            )
                        }))}

                    </div>
                        </div>

                    </section>
                )
           }}
       </ProductConsumer>
    )
}

export default Products
