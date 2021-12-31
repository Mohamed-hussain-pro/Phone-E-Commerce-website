import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/cart";
import Details from "./components/Details";
import Model from "./components/Model";
import Footer from "./components/Footer";


function App() {
  return (
      <React-Fragment>
       <Navbar />
       <main>
        <Switch>
          <Route exact path="/" component= {ProductList} />
          <Route exact path="/details" component= {Details} />
          <Route exact path="/cart" component= {Cart} />
          <Route exact  component= {Default} />
        
        </Switch>
       </main>
       <Footer />
       <Model />
      
      </React-Fragment>
  );
}

export default App;
