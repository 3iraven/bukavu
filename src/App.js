// App.js
import React from 'react';

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousol";
import Services from "./components/Services";
import "./App.css"


function App() {
  return (
    <div className="main-container"> 
      <Navbar />
     <Carousel/>
     <Services/>
    </div>
  );
}

export default App;