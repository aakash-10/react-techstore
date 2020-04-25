import React from 'react'
import Product from '../../components/Product'
import {Link} from 'react-router-dom'
import Title from '../title'
import {ProductConsumer} from '../../context'

function Featured() {
    return (
      <section className="py-5">
          <div className="container">
              <Title title="Featured Products" center="True">

              </Title>
        <div className="row my-5">
<ProductConsumer>
        {value =>{
            const {featuredProducts} = value
            return featuredProducts.map(product =>(
                <Product key={product.id} product={product}></Product>
            ))
        }}

</ProductConsumer>
        </div>
        <div className="row mt-5 ">
            <div className="col text-center">
<Link to="/products" className="main-link">Our Products </Link>
            </div>

        </div>
          </div>

      </section>
    )
}



export default Featured
