import React  from 'react';

// import Header from "./Header";
// import Footer from "./Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';


const App = () =>{
  return ( 
    <Router>
      <div className="main-content">
      
      <Routes>
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      
      </div>
    </Router>
  )

}

export default App;
