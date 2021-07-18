import React from "react";
import background from '../images/homes.jpg'
import logo from '../logo.svg';

function Home() {
  return (
    <div className="home">



      <div className="container-fluid landing-wrapper">
        <img src={background} alt={"logo"}/> 
      </div>
    </div>
  );
}

export default Home;