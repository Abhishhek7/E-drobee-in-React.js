import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop' 
import Contact from './Pages/Contact'
import About from './Pages/About'
import Card from './Components/Card'
import Cart from './Components/Cart'
import Payment from './Components/Payment'
import Servicepage from './Components/ServicePage'
import Terms from './Components/Terms'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Testimonial1 from './Components/Testimonial1'
import Aboutt from './Pages/Aboutt'
import Footer from './Components/Footer'


const App = () => {
  const [cartCount, setCartCount] = useState(0);

  
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
   <Navbar cartCount={cartCount}  />
     
     <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/shop' element={<Shop/>}/>
      <Route path = '/about' element={<About/>}/>
    <Route path = '/aboutt' element={<Aboutt/>}/>
      <Route path = '/contact' element={<Contact/>}/>
      
      <Route
          path="/"
          element={<Card updateCartCount={setCartCount} />}
        />
          
          <Route
          path="/cart"
          element={<Cart updateCartCount={updateCartCount} />}
        />
        <Route path="/payment" element={<Payment />} />

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