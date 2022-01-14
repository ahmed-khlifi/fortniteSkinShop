import React from 'react';
import './App.css';
// component
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';
import Home from './components/Home';
import Shop from './components/Shop.js';
import About from './components/About.js';
import ItemDetails from './components/ItemDetails';
import ScrollToTop from './ScrollToTop'
import ToTop from "react-scroll-to-top";
// react router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    // give routing functionalities
    <Router>
      <ScrollToTop />
      <ToTop smooth color="#01E6FF" />
      <div>
        <Nav/>
        {/* when it found a route with specifique path , it render that component  */}
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:itemId" component={ItemDetails} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}


export default App;
