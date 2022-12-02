import React from 'react';
import axios from 'axios';
import AssetCards from './Components/AssetCards';
import './App.css';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isBuyOrSellModalShown:false,
      isPortfolioModalShown:false,
      userData:{},
      userDataIsAvailable: false
    }
  }

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

//showBuyOrSellModal()

getUser = async () => {
  try {
    let results = await axios.get(`${SERVER}/user`);
    this.setState({
      userData: results.data[0],
      userDataIsAvailable: true
    });
  } catch (error) {
    console.log('we have an error: ', error.response.data);
  }
}

componentDidMount() {
  this.getUser();
}


  render(){

    //console.log(this.state.userData);
    if(this.state.userData.portfolio){
      console.log(this.state.userData.portfolio);
    }
    

  return (
<>
    {/* //<Header with the Nav bar> */}

    {/* //<div flexbox> 
      //Tabs(for adding new asset) hard code the 15 to 20
      // Current balance(button) pass user's portfolio
    //<div flexbox> */}
    {this.state.userDataIsAvailable &&
       <AssetCards  
       portfolio={this.state.userData.portfolio} 
       // handleBuyOrSellModal = {this.showBuyOrSellModal}
       />
      
    }


    <p>Hello World</p>
    </>
  );
  }
}

export default App;
