import React from "react"
import { useEffect } from "react";
import { Link } from "react-router-dom";



import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Components/Card";



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, []);
    return (
        <>
        <div className="bg-gray-100">
      <div data-aos="fade-up" className='relative h-screen bg-cover bg-center' style={{backgroundImage: "url('/Images/home1.jpg')"}}>
          <div  className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-4xl md:text-6xl font-bold text-white'>
         WELCOME TO E-DROBE
      </h1>
      <p data-aos="fade-left"  className='text-lg md:text-2xl text-white mb-8'>Effortlessly blend comfort & style!.</p>
      
    
      </div>
     
      </div>
<Card/>
      
              
      </div>
   
      </>
    )
  }
  
  export default Home