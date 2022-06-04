
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
                    <div className="title-box mb-0 text- ">
                        <h2 className="mb-0">About </h2>
                        <h4 className="mt-0 mb-2 sub-title">We Are Digital Data <span>Analytic & Marketing</span></h4>
                        <p>We use the power of data and expertise to develop intervention, implementation, and optimization strategies to help organizations and businesses improve services, increase revenue, and promote better decision-making.</p>
                    </div>


                </div>


                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="mb-0">Our   <b>Mission</b></h2>
                        <h4 className="mt-0 mb-2 sub-title">Data & <span>Analytics Consulting </span></h4>
                    </div>

                    <p>We use the power of data and expertise to develop intervention, implementation, and optimization strategies to help organizations and businesses improve services, increase revenue, and promote better decision-making.</p>


                </div>

             
            </OwlCarousel>

        );

    }



}

export default Tdsaboutslider;