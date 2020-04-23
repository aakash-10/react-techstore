import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import contact from './pages/ContactPage'
import singleproduct from './pages/SingleProductPage'
import cart from './pages/CartPage'
import Default from './pages/DefaultPage' 
import {Route, Switch} from 'react-router-dom'


class App extends Component {
  render(){
    return (
      <>
      {/*nav bar */}
      <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={contact} />
          <Route path="/cart" component={cart} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={singleproduct} />
          <Route component={Default} />
      </Switch>

       
      </>
    );
  }
  
}

export default App;
