import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Login from './pages/login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>        
        <Route path='/signup' element={<Signup/>}/>        
        <Route path='/' element={<Home/>}/>        
        <Route path='/aboutUs' element={<AboutUs/>}/>        
        <Route path='/contactUs' element={<ContactUs/>}/>        
        <Route path='/product' element={<Product/>}/>        
      </Routes>
    </>
  )
}

export default App
