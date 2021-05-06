import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
// import react, {useState, useEffect} from 'react'; 
import Nav from './components/Nav';
import Countries from './components/Countries';
import Filter from './components/Filter'
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form'; 







function App() {

  return (
    <Router>
      <Nav/>
      <h1>Thank you for visiting my page! </h1>
      <Filter/>
      <Countries/>
      <Form/>
      <Footer/>
    </Router>
  
  );
}

export default App;
