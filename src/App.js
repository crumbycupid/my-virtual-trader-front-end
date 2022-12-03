import React from 'react';
import axios from 'axios';
import AssetCards from './Components/AssetCards';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton.js';
import LogoutButton from './Components/LogoutButton.js';
import Profile from './Components/Profile.js';
import Header from './Components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAssetDropdown from './Components/AddAssetDropdown';
import PortfolioModal from './Components/PortfolioModal'


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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBuyOrSellModalShown: false,
      isPortfolioModalShown: false,
      userData: {},
      userDataIsAvailable: false,
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




  getUser = async () => {
    try {
      this.setState({
        gotUserData: true
      });
      console.log(this.props.auth0.user.email);
      let results = await axios.get(`${SERVER}/user?email=${this.props.auth0.user.email}`);
      console.log(results);

      if (results.data.length === 0) {
        console.log('HERE!')
        this.createUser({ name: this.props.auth0.user.name, email: this.props.auth0.user.email, portfolio: newUserPortfolio, balance: 10000 });
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

  handleOpenPortfolioModal = () => {
    console.log('Show the Portfolio Modal')
    this.setState({
      isPortfolioModalShown: true
    });
  }

  handleClosePortfolioModal = () => {
    console.log('Close the Portfolio Modal')
    this.setState({
      isPortfolioModalShown: false
    });
  }

  // componentDidMount() {
  //  this.getUser();
  // }


  render() {

    //console.log(this.state.userData);
    // if (this.state.userData.portfolio) {
    //   console.log(this.state.userData.portfolio);
    // }
    if (this.props.auth0.isAuthenticated && !this.state.gotUserData) { this.getUser(); }
    return (
      <>
        <Header id="header" />
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Profile /> : <h3>Please Log In</h3>}


        {this.props.auth0.isAuthenticated ?
          <Stack direction="horizontal" gap={3}>

            <div className="bg-light border">
              <AddAssetDropdown />
            </div>

            <div className="bg-light border ms-2">
              <Button variant="outline-dark"
                onClick={this.handleOpenPortfolioModal}
              >Current Balance is {this.state.userData.balance}
              </Button>
            </div>

          </Stack> : null}
        {/* //<div flexbox> 
      //Tabs(for adding new asset) hard code the 15 to 20
      // Current balance(button) pass user's portfolio
    //<div flexbox> */}
        {this.state.userDataIsAvailable && this.props.auth0.isAuthenticated &&
        <>
        <PortfolioModal userData={this.state.userData} onHide={this.handleClosePortfolioModal} show={this.state.isPortfolioModalShown}
        />
          <AssetCards
            portfolio={this.state.userData.portfolio}
          // handleBuyOrSellModal = {this.showBuyOrSellModal}
          />
          </>

        }


        <p>Hello World</p>
      </>
    );

  }
}

export default withAuth0(App);
