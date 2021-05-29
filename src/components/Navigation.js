import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar } from 'react-bootstrap';

 
//import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div>
 {/* <nav className="justify-content-end" activeKey="/home">
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav> */}
    
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">Bukavu-Analytica</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

        </div>
       
         
    );
}
 
export default Navigation;