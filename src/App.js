import React from 'react';
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Nav from './components/Nav';
import Countries from './components/Countries';
import Filter from './components/Filter'
import './App.css';





function App() {
  return (
    <>
      <Nav/>
      <h1>Thank you for visiting my page! </h1>
      <Filter/>
      <Countries/>
      
    
    </>
  );
}

export default App;
