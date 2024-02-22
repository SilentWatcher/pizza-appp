import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  
  return (
    
    <>
    
    <BrowserRouter>
    <Navbar/>
    {/* <Home /> */}
    <Routes>
      
      <Route path='/'  element={<Home/>} />
      <Route path='/menu'  element={<Menu/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/contact'  element={<Contact/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
