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
        cartItems: 0,
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
    
},
()=>{
    this.addTotals()
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
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
        subTotal += item.total
        cartItems += item.count
    });
console.log(subTotal)
subTotal = parseFloat(subTotal.toFixed(2));
let tax = subTotal * 0.2;
tax = parseFloat(tax.toFixed(2));
let total = subTotal+ tax;
total = parseFloat(total.toFixed(2));
console.log("in get total")
console.log(cartItems,subTotal,tax,total)
return{
    cartItems,
    subTotal,
    tax,
    total
}

}

//add totals
addTotals =() =>{
    console.log("add totals called")
    console.log(this.getTotals)
    const totals = this.getTotals();
    console.log(totals.cartItems)
    this.setState({
        cartItems: totals.cartItems,
        cartSubTotal: totals.subTotal,
        cartTax: totals.cartTax,
        cartTotal: totals.total

    })

}

//sync storage
syncStorage = () =>{}

//add to cart
addToCart = (id) =>{
    console.log(`add to cart ${id}`)
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item=> item.id === id);
    if(!tempItem){
        console.log("if block")
        tempItem = tempProducts.find(item => item.id ===id)
       
        let total = tempItem.price;
        let cartItem = {...tempItem,count:1,total};
        
        tempCart =[...tempCart,cartItem]
       

    }
    else{
        console.log("else blocl")
        tempItem.count++;
        
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));

    }
    this.setState(()=>{
        return {cart: tempCart}
    },()=>{
            this.addTotals()
            this.syncStorage()
            this.openCart()
        
    })


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

