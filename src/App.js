import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Table from './pages/NewTable';
import NewForm from './pages/NewForm';
import Chart from "./pages/Chart";
import AllApis from "./pages/AllApis";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import GoogleMap from "./pages/GoogleMap";
import ProductDetails from "./pages/ProductDetails"; 

const App = () =>{
  return ( 
    <Router>
      <div className="main-content">
      
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/table" element={ <Table/> } />
        <Route path="/form" element={ <NewForm/> } />
        <Route path="/chart" element={ <Chart/> } />
        <Route path="/allapi" element={ <AllApis/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      
      </div>
    </Router>
  )

}

export default App;
