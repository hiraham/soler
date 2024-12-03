import React from 'react'
import Header from './components/Header'
import NavigationSection from './components/NavigationSection'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import Product from './components/Product'
const page = () => {
  return (
    <div>
     <Header/> 
     <NavigationSection/>
     <Hero/>
     <Product/>
     <Services/>
     <Footer/>
    </div>
  )
}

export default page
