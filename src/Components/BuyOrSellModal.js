import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class BuyOrSellModal extends React.Component{

handleCloseClick=()=>{
  this.props.hideModal();
}
  
  render(){
    return(
      <Modal show={this.props.isModalShown}>
        <Modal.Header closeButton onClick={this.handleCloseClick}>
          <Modal.Title>{this.props.modalDescription}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img 
          src={this.props.modalImage} 
          alt={this.props.modalDescription} 
          width="450px" 
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseClick}>Close</Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
    </Modal>
    );
  }
}

export default BuyOrSellModal;
