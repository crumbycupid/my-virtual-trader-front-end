import React from 'react';
import axios from 'axios';
import AssetCards from './Components/AssetCards';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton.js';
import LogoutButton from './Components/LogoutButton.js';
import Profile from './Components/Profile.js';
import Header from './Components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAssetDropdown from './Components/AddAssetDropdown';

import LandingPage from './Components/LandingPage.js';
import AboutProfile from './Components/About.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import PortfolioModal from './Components/PortfolioModal';



let SERVER = process.env.REACT_APP_SERVER;
let newUserPortfolio = [
  {
    "ticker": "GOOG",
    "amountOwned": 0,
    "boughtAt": 0
  }, {
    "ticker": "TSLA",
    "amountOwned": 0,
    "boughtAt": 0
  }, {
    "ticker": "AAPL",
    "amountOwned": 0,
    "boughtAt": 0
  },
  {
    "ticker": "AMZN",
    "amountOwned": 0,
    "boughtAt": 0
  }
]

let tickerArray = [
  "GOOG","TSLA","CRM","AAPL","AMZN","XOM","MSFT","NVDA","UNH","WMT"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuyOrSellModalShown: false,
      isPortfolioModalShown: false,
      userData: {},
      stockData:[],
      userDataIsAvailable: false,
      stockDataIsAvailable: false,
      gotUserData: false
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

getStocks = async () => {
  try{

  //   let results = tickerArray.map(async (ticker)=> {
  //     return(
  //       await axios.get(`${SERVER}/stocks?chosenTicker=${ticker}`
  //     ).then((data)=>{
  //       return data;})
  //     )
  // });

      let arrayResults =[];

      //"TSLA","GOOG","AAPL","AMZN", "XOM", "MSFT","NVDA", "UNH"

    let results1 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=GOOG`);
    let results2 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=TSLA`);
    let results3 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=CRM`);
    let results4 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=AAPL`);
    let results5 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=AMZN`);
    let results6 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=XOM`);
    let results7 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=MSFT`);
    let results8 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=NVDA`);
    let results9 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=UNH`);
    let results10 = await 
        axios.get(`${SERVER}/stocks?chosenTicker=WMT`);

        //"GOOG","TSLA","CRM","AAPL","AMZN","XOM","MSFT","NVDA","UNH","WMT"


    arrayResults =[results1.data,results2.data,results3.data,results4.data,
      results5.data,results6.data,results7.data,results8.data,results9.data,results10.data];
    

     //console.log(arrayResults);
    // console.log(arrayResults[0]);

    this.setState({
      stockData: arrayResults,
      stockDataIsAvailable: true,
    });
    
    

  }catch(err){
    console.log('we have an error: ', err);
  }
}


  getUser = async () => {
    try {
      this.setState({
        gotUserData: true
      });
      //console.log(this.props.auth0.user.email);
      let results = await axios.get(`${SERVER}/user?email=${this.props.auth0.user.email}`);
      //console.log(results);

      if (results.data.length === 0) {


        await this.createUser({ name: this.props.auth0.user.name, email: this.props.auth0.user.email, portfolio: newUserPortfolio, balance: 10000 });
        
    
        results = await axios.get(`${SERVER}/user?${this.props.auth0.user.email}`);
      }
      this.setState({
        userData: results.data[0],
        userDataIsAvailable: true
      });
    } catch (error) {
      console.log('we have an error: ', error);
    }
  }


  createUser = async (aUser) => {
    console.log('created a user')
    try {
      let userThatWasAdded = await axios.post(`${SERVER}/user`, aUser);
      console.log(userThatWasAdded);

    } catch (error) {
      console.log('we have an error creating a user');
    }

  }

  //app.put('/user/:id', updateStock);
  updateStock = async (stockToUpdate) => {
    try {
      let url = `${SERVER}/user/${this.state.userData._id}`;

        let updatedUser = this.state.userData;
        
        updatedUser.portfolio.push({
            "ticker": stockToUpdate,
            "amountOwned": 0,
            "boughtAt": 0
        });

      this.setState({
        userData: updatedUser
      });

      let updatedUserPortfolio = await axios.put(url, updatedUser);
          
      //console.log(updatedUserPortfolio.data);

    } catch (err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  // NEED to Finish here
  deleteStock = async (ticker) => {
    try {
      let url = `${SERVER}/user/${this.state.userData._id}`;

        let updatedUser = this.state.userData;
        
        updatedUser.portfolio = updatedUser.portfolio.filter(stock => stock.ticker !== ticker);
    //console.log(updatedUser);

      this.setState({
        userData: updatedUser
      });

      let updatedUserPortfolio = await axios.put(url, updatedUser);
          
      //console.log(updatedUserPortfolio);

    } catch (err) {
      console.log('We have an error: ', err.response.data);
    }
  }

  handleOpenPortfolioModal = () => {
    this.setState({
      isPortfolioModalShown: true
    });
  }

  handleClosePortfolioModal = () => {
    this.setState({
      isPortfolioModalShown: false
    });
  }

  render() {
    if (this.props.auth0.isAuthenticated && !this.state.gotUserData) { this.getUser();
    this.getStocks() }
    return (
      <>
        <Router>
          <Header id="header" />
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Log In</h3>}
          <Routes>
            <Route
              exact path="/landingPage.js"
              element={<LandingPage
                BuyOrSellModalShown={this.state.isBuyOrSellModalShown}
                PortfolioModalShown={this.state.isPortfolioModalShown}
                isUserDataAvailable={this.state.userDataIsAvailable}
                haveUserData={this.state.gotUserData}
              />}
            /> 
            <Route
            exact path="/About.js"
            element={<AboutProfile/>}
          />
            <Route
            exact path="/"
            element={
              <>
            {this.state.userDataIsAvailable && this.props.auth0.isAuthenticated ?
            <Stack direction="horizontal" gap={3}>

              <div className="bg-light border">
                <AddAssetDropdown
                updateStock = {this.updateStock}
                 portfolio={this.state.userData.portfolio}/>
              </div>

              <div className="bg-light border ms-2">
                <Button variant="outline-dark"
                  onClick={this.handleOpenPortfolioModal}
                >Current Balance is {this.state.userData.balance}
                </Button>
              </div>

            </Stack> : null}
         
            {
            !this.state.stockDataIsAvailable && this.props.auth0.isAuthenticated && 
            <div id='spinner'><Spinner size="lg"  animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner></div>  
          }


          {this.state.userDataIsAvailable && this.props.auth0.isAuthenticated && this.state.stockDataIsAvailable &&
            <>
              <PortfolioModal userData={this.state.userData} onHide={this.handleClosePortfolioModal} show={this.state.isPortfolioModalShown}
              />
              <p></p>
              <AssetCards
                deleteStock={this.deleteStock}
                stockData={this.state.stockData}
                portfolio={this.state.userData.portfolio}
              // handleBuyOrSellModal = {this.showBuyOrSellModal}
              />
            </>
          }
            </>
            }
            
          />
           
          </Routes>
        </Router>
      </>
    );

  }
}

export default withAuth0(App);
