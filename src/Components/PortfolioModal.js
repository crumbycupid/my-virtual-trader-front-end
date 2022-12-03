import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';


class PortfolioModal extends React.Component {
  render() {

    let portfolioArray = this.props.userData.portfolio;
    let newArr = portfolioArray.map((asset, idx) => {
      return <ListGroup.Item key={asset.ticker}>{asset.ticker} Owned: {asset.amountOwned}</ListGroup.Item>;
    });

    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header>
            <Modal.Title> {this.props.userData.name} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              Your portfolio {newArr}
            </ListGroup>
            Your Balance is {this.props.userData.balance}</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )

  }



}


export default PortfolioModal;
