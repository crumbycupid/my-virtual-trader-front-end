import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';



class PortfolioModal extends React.Component {
  render() {

    let portfolioArray = this.props.userData.portfolio;
    let newArr = portfolioArray.map((asset, idx) => {
      return <ListGroup.Item key={asset.ticker}>{asset.ticker} Owned: {asset.amountOwned}</ListGroup.Item>;
    });

    return (
      <>
        <Modal id="portfolio-modal"
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header id="portfolio-header">
            <Modal.Title id="portfolio-title"> {this.props.userData.name} </Modal.Title>
          </Modal.Header>
          <Modal.Body id="portfolio-body">
            <ListGroup className="portfolio-items">
              {newArr}
            </ListGroup>
            Your Balance is $0</Modal.Body>
            <Alert key='danger' variant='danger'>
          You need to have the premium version to use this feature. Premium price: $19.99
        </Alert>
          <Modal.Footer>
        <Button onClick={this.props.onHide} >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )

  }



}


export default PortfolioModal;
