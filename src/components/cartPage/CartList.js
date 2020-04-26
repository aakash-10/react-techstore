import React from 'react'
import { ProductConsumer } from '../../context'
import CartItem from './CartItem'


function CartList() {
    console.log("carlist start")
    return (
        <div className="container-fluid">
            {/* row */}
            <div className="row">
                <div className="col">
                    <ProductConsumer>
                    {value=>{
                      
                      
                        const {cart,increment,decrement,removeItem} = value;
                    
                        if(cart.length === 0){
                        
                            return (<h1 className="text-title text-center my-4">
                                Your cart is Currently Empty    </h1>)
                                 
                         
                        }
                        else{
                         
                            return (
                                <>
                       {cart.map(item=>(<CartItem key={item.id} 
                       increment={increment} decrement={decrement} cartItem={item} removeItem={removeItem}/>))}
                                </>
                            )
                        }
                        
                    }
                    }

                    </ProductConsumer>

                </div>

            </div>

        </div>
    )
}

export default CartList
