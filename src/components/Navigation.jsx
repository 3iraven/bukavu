import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div style={{ padding: "0px" ,
				textAlign: "center",
				marginTop: "50px" }} className="container">
          <NavLink className="navbar-brand" to="/">
            Bukavu Analytics
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

             <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>

 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;