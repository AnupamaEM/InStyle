import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Table from './pages/NewTable';



const App = () =>{
  return ( 
    <Router>
      <div className="main-content">
      
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/table" element={ <Table/> } />
      </Routes>
      
      </div>
    </Router>
  )

}

export default App;
