import React, { Component } from 'react';
import './index.css';
 import { NavLink } from 'react-router-dom';
 
const Navbar = () =>{
    return(
        <div>
            <div className='containter-fluid-Home nav-bg'>
                <div className='row'>
                    <div className='col-10 max-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">
              
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                           <NavLink  className="nav-link " aria-current="page" to="/Home">
                            Home
                            </NavLink>
                          </li>

                          <li className="nav-item">
                            <NavLink 
                             className="nav-link" to="/login">
                              Login</NavLink>
                          </li>
                          
                          <li className="nav-item">
                            <NavLink  className="nav-link" to="/experience">Experience</NavLink>
                          </li>
                          
                        </ul>
                        
                        </div>
                   </div>
                </nav>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Navbar ;