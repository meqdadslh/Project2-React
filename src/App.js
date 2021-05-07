import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import react, {useState, useEffect} from 'react'; 
import Nav from './components/Nav';
import Filter from './components/Filter';
import Countries from './components/Countries';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form'; 
import Details from './components/Details';
import About from './components/About'; 







function App() {

  
  return (
    <Router>
      <Nav/>
      <h1>Thank you for visiting my page! </h1>
      <Switch>
      <Route exact path="/">
      <Filter/>
      <Countries/>
      </Route>
      <Route path="/:name" children={<Details/>}></Route>
      {/* <Route exact path="/:About" components={About}/></Route> */}
      </Switch>
      <Form/>
      <Footer/>
    </Router>
  
  );
}

export default App;
