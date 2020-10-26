import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { InitialMov } from "./components/Products"
import Cart from './components/Cart'


function App() {

  const productlist = [{ id: 1, name: "Phone", quantity: "1", price: "700", img: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", status: "Hot" },
  { quantity: "1", id: 2, name: "Shoes", price: "150", img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", status: "New" },
  { quantity: "1", id: 3, name: "Microphone", price: "250", img: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", status: "Hot" },
  { quantity: "1", id: 4, name: "Head-phone", price: "180", img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", status: "New" },
  { quantity: "1", id: 5, name: "Lunette", price: "160", img: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", status: "Hot" },
  { quantity: "1", id: 6, name: "Dslr", price: "350", img: "https://images.pexels.com/photos/1787234/pexels-photo-1787234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", status: "New" },
  { quantity: "1", id: 7, name: "Rings", price: "250", img: "https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", status: "Hot" },
  { quantity: "1", id: 8, name: "Watch", price: "260", img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", status: "New" }
  ]


  const [Product, setProduct] = useState(productlist)
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {

    setCart([...cart, product]); console.log(cart)
    setProduct(Product.filter(p => p.id != product.id))
  }
  const inc = (id) => {
    const elementsIndex = cart.findIndex(element => element.id == id)
    let newArray = [...cart]
    newArray[elementsIndex] = { ...newArray[elementsIndex], quantity: +newArray[elementsIndex].quantity + 1 }
    console.log(newArray)
    setCart(newArray)
  }
  const remove = (x) => {
    setCart(cart.filter(el => el.id != x))
  }
  const dec = (id) => {
    if (cart.filter(el => el.id == id)[0].quantity != 1) {
      const elementsIndex = cart.findIndex(element => element.id == id)
      let newArray = [...cart]
      newArray[elementsIndex] = { ...newArray[elementsIndex], quantity: +newArray[elementsIndex].quantity - 1 }
      console.log(newArray)
      setCart(newArray)
    }

  }

  return (

    <Router>

      <Navbar tab={cart} />


      <Switch>

        <Route path="/" exact component={() => <InitialMov products={Product} addToCart={addToCart} />} />
        <Route path="/cart" exact component={() => <Cart inc={inc} dec={dec} remove={remove} cart={cart} />} />
        <Route component={NotFound} />
      </Switch>
    </Router>



  );
}

export default App;
