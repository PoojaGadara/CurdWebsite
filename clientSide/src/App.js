import React, { Component } from 'react';
import Home from './Home';
import Contact from './Home';
import Login from './login'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Profile from './profile';
import Update from './update'
import Images from './images';

const App = () => {
    return(
    <div>
    
    <Router>
        <Routes>
            <Route path="/" element={<Profile/>} />        
            <Route path="/Home" element={<Profile/>} />
            <Route path='/profile' element={<Contact/>} />
            <Route path='/Update/:_id' element={<Update/>} />
            <Route path='/images' element={<Images/>} />
        </Routes>
    </Router>
    </div>
    
        
    );

}
 
export default App ;