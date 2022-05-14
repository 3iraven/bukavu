import React from "react";
import ReactDOM from "react-dom";
import "./black.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Services,

} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

    </Routes>
    <div id="gap"></div>
    <Footer />
  </Router>,

  document.getElementById("root")
);

 
