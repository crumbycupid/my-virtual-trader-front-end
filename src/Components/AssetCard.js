import React from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AssetCard extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     likes:0,
  //   };
  // }

  //build graph in here

//   handleClick = () => {

  showBuyOrSellModel = () => {
    console.log("Show the buy or sell modal");
  }

//     // this.props.showBuyOrSellModal(this.props.portfolio.ticker);
// //call the buy sell modal(pass the ticker)

//   };

  render(){

    // constructor(chartObject, formattedTime) {
    //   this.ticker = chartObject.ticker;
    //   this.resultsCount = chartObject.resultsCount;
    //   this.closePrice = chartObject.results.map(price => price.c);
    //   this.formattedTime = formattedTime;
    // }

// [
//   {
//     "_id": "638923e743beb3ec18854364",
//     "name": "Craig",
//     "email": "craig@gmail.com",
//     "portfolio": [
//       {
//         "ticker": "GOOG",
//         "amountOwned": 20000,
//         "boughtAt": 250
//       }
//     ],
//     "__v": 0
//   }
// ]

    return(
    <Col>
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img onClick = {this.handleClick} variant="top" src={this.props.image_url} /> */}
      <Card.Body>
        <Card.Title>{this.props.asset.ticker}</Card.Title>
        <Card.Text>
          This is where the price and amountOwned go.
          
        </Card.Text>
        <Button onClick={this.showBuyOrSellModel}>Buy or Sell</Button>
      </Card.Body>
    </Card>
  
      {/* <h2>{this.props.title}</h2>
      <img 
      onClick = {this.handleClick}
      height = "300px" 
      width = "300px" 
      alt={this.props.description} 
      src={this.props.image_url}
      title = {this.props.title} />
      <p>{this.props.description} </p>
      <p>❤️ {this.state.likes}</p>
       */}
      </Col>
    );
  }
}

export default AssetCard;
