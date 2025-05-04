import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Testimonials from './pages/Testimonials'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footter from './pages/Footter'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="product/:id" element={<ProductDetails/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/testimonials" element={<Testimonials/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/contactus" element={<Contact/>}></Route>

    </Routes>
    <Footter></Footter>
    </BrowserRouter>
    
       
    </>
  )
}

export default App
