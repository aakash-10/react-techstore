import React, {Component} from 'react'
import {linkData} from './linkData'
import { socialData} from './socialData'
const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component{
    state={
        sidebarOpen : false,
        cartOpen :false,
        carItems: 10,
        links: linkData,
        socialIcons: socialData,
        cart : []
    }
// handle sidebar
    handleSidebar = () =>{
       
        this.setState({
            sidebarOpen : !this.state.sidebarOpen
        })
    }

    // handle cart
    handleCart = () =>{
        this.setState({
            cartOpen : !this.state.cartOpen
        })
    }

    closeCart = () =>{
        this.setState({cartOpen : false})
    }

    openCart = () =>{
        this.setState({cartOpen : true})
    }

    render(){
        return (<ProductContext.Provider value={{handleSidebar:this.handleSidebar,
        ...this.state,handleCart:this.handleCart,closeCart:this.closeCart,openCart:this.openCart}}>
            {this.props.children}
        </ProductContext.Provider>)
       
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer}

