import React, {Component} from 'react'
import {linkData} from './linkData'
import { socialData} from './socialData'
import {productData, items} from './productData'
const ProductContext = React.createContext();
//provider
//consumer

class ProductProvider extends Component{
    state={
        sidebarOpen : false,
        cartOpen :false,
        carItems: 0,
        links: linkData,
        socialIcons: socialData,
        cart : [],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true

    }
componentDidMount(){
    //from contentful



    this.setProducts(items)
}

//set Products
setProducts = (products)=>{
    let storeProducts = products.map(item=>{
        const {id} = item.sys;
        const image = item.fields.image.fields.file.url;
        const product = {id,...item.fields, image};
     
        return product
    });

//featured products

let featuredProducts = storeProducts.filter(item => item.featured== true);
this.setState({
    storeProducts,
    filteredProducts: storeProducts,
    featuredProducts,
    cart:this.getStorageCart(),
    singleProduct: this.getStorageProduct(),
    loading: false,
    
})
}

//get cart from local storage
getStorageCart = () =>{
    return []
}

//get product from local storage
getStorageProduct = () => {
        return []
    }

    //get totals
getTotals = () =>{

}

//add totals
addTotals =() =>{

}

//sync storage
syncStorage = () =>{}

//add to cart
addToCart = (id) =>{
    console.log(`add to cart ${id}`)
}

//set single product

setSingleProduct = (id) =>{
    console.log(`set single product ${id}`)
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
        ...this.state,handleCart:this.handleCart,closeCart:this.closeCart,openCart:this.openCart,addToCart:this.addToCart,setSingleProduct:this.setSingleProduct}}>
            {this.props.children}
        </ProductContext.Provider>)
       
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider,ProductConsumer}

