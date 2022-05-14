import React from "react";
import './Nav.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {CardGroup, Button} from 'react-bootstrap';  



function About() {
  return (
    <div>
        <div className="container"  style={{ padding: "0px" ,
				textAlign: "center",
				marginTop: "10px" }}>
                 <div className="row justify-content-center">
                     <div className="col-lg-8 col-xxl-6">
                         <div className="text-center my-5">
                             <h1 className="fw-bolder mb-3">Our mission is to make building websites easier for everyone.</h1>
                             <p className="lead fw-normal text-muted mb-4">Start Bootstrap was built on the idea that quality, functional website templates and themes should be available to everyone. Use our open source, free products, or support us by purchasing one of our premium products or services.</p>
                          
                         </div>
                     </div>
                 </div>
        </div>

        <div className="container"  style={{ padding: "0px" , marginTop: "10px" }}>
            <div className="row justify-content-center">

            </div>


        </div>

    </div>

    
  );
}

export default About;


