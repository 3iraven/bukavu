
import React from 'react';
import {

    Row, Col, Progress
} from 'reactstrap';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Tdsaboutslider.css';

class Tdsaboutslider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                items="1"
                dots={true}
                lazyLoad={true}

            >


                <div className="item">
                    <div className="title-box mb-0 text-left">
                        <h2 className="mb-0">About </h2>
                        <h4 className="mt-0 mb-2 sub-title">We Are Digital Data <span>Analytic & Marketing</span></h4>
                        <p>When an unknown printer took a galley of type and scrambled.</p>
                    </div>


                </div>


                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="mb-0">Our   <b>Mission</b></h2>
                        <h4 className="mt-0 mb-2 sub-title">We Are Digital <span>Marketing </span></h4>
                    </div>
                    <p>When an unknown printer took a galley of type and scrambled. </p>
                    <p>Simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                    <p>Word in classical literature, discovered the undoubtable source.  "de Finibus Bonorum et Malorum.</p>
                    <p>Standard chunk of Lorem Ipsum used since the 1500s is reproduced  "de Finibus Bonorum et Malorum" by Cicero.</p>

                </div>

             
            </OwlCarousel>

        );

    }



}

export default Tdsaboutslider;