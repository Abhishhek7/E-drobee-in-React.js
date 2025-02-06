import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop' 
import Contact from './Pages/Contact'
import About from './Pages/About'
import Product from './Pages/Product'
import Card from './Components/Card'
import Cart from './Components/Cart'
import Payment from './Components/Payment'
import Servicepage from './Components/ServicePage'
import Terms from './Components/Terms'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Testimonial1 from './Components/Testimonial1'
import Aboutt from './Pages/Aboutt'
import Footer from './Components/Footer'
import Wishlist from './Components/Wishlist'

const App = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistCount(storedWishlist.length);
  }, []);

  const updateWishlistCount = (newCount) => {
    setWishlistCount(newCount);
  };

  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);
  


  return (
   <>
   
   <BrowserRouter>
   <Navbar wishlistCount={wishlistCount}  cartCount={cartCount}  />

     
     <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/shop' element={<Shop/>}/>
      
    <Route path = '/aboutt' element={<Aboutt/>}/>
    <Route path = '/product' element={<Product/>}/>
      <Route path = '/contact' element={<Contact/>}/>
      
      <Route
          path="/"
          element={<Card updateCartCount={setCartCount} updateWishlistCount={updateWishlistCount} />}
        />
          
          <Route
          path="/cart"
          element={<Cart updateCartCount={updateCartCount} />}
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path = '/services' element={<Servicepage/>}/>
        <Route path='/testimonials' element={<Testimonial1/>} />
        <Route path='/termsandconditions' element={<Terms/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>

     </Routes>
     
     <Footer/>
     </BrowserRouter>
      



     
     
   </>
  )
}

export default App