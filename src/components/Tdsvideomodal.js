
import React, { useState } from 'react';
import { Button, Modal, ModalBody, } from 'reactstrap';

import './Tdsvideomodal.css';
class Tdsvideomodal extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            modal:false
        }
    }

    toggle = () =>{
        this.setState({
            modal:!this.state.modal
        })
    }

    render() {
        return (
            <div>
                {/* <Button color="secondary" onClick={this.toggle}> <i className="icofont-play-alt-1"></i> Watch Now</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-video">

                    <ModalBody>
                        <button className="close" onClick={this.toggle}><i class="icofont-close-line"></i></button>

                    </ModalBody>

                </Modal> */}
            </div>
        );
    }        
}

export default Tdsvideomodal;