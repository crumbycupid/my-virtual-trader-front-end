import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class PortfolioModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header>
            <Modal.Title> {this.props.userData.name} </Modal.Title>
          </Modal.Header>
          <Modal.Body> Your Balance is {this.props.userData.balance}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )

  }



}


export default PortfolioModal;
