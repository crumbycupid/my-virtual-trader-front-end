import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AssetCard from "./AssetCard";


class AssetCards extends React.Component{

  render() {

     let cardsArray = this.props.portfolio;

     console.log(cardsArray);
    
    // cardsArray = this.handleCards(this.props.portfolio);
  
    let newerArr = cardsArray.map((asset,idx)=>{ 
      return(
      <AssetCard 
      showModal = {this.props.showBuyOrSellModal}
      key= {idx} 
      asset = {asset}
      
      // title= {beast.title} 
      // description= {beast.description} 
      // keyword= {beast.keyword} 
      // horns= {beast.horns}
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
