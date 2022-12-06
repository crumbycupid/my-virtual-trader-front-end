import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AssetCard from "./AssetCard";


class AssetCards extends React.Component{

  render() {

     let cardsArray = this.props.portfolio;
  
    let newerArr = cardsArray.map((asset,idx)=>{ 
      return(
      <AssetCard
      deleteStock={this.props.deleteStock} 
      showModal = {this.props.showBuyOrSellModal}
      key= {idx} 
      asset = {asset}
      stockData = {this.props.stockData}
      
    
      />
    )
  });

    return (
     <Container fluid>
      <Row>
        {newerArr}
      </Row>
     </Container>
    );
  }

}




export default AssetCards;
