import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './componants/Contact'
import Index from './componants/Index'
import Header from './componants/Header'
import About from './componants/About'
import Form from './componants/Form'
import Pg from './componants/Pg'
import Property from './componants/Property'
import Services from './componants/Services'
import Footer from './componants/Footer';
import './style/style.css'








const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/contact" element={<Contact />} />   
         <Route path="/about" element={<About />} />
         
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pg" element={<Pg />} />        
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
