import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

let tickerArray = [
  "Tesla: TSLA","Alphabet: GOOG","Apple: AAPL","Amazon: AMZN", "Twitter: TWTR", "Exxon Mobil: XOM", "Microsoft: MSFT","Nvidia: NVDA", "Berkshire Hathaway: BRK.B", "UnitedHealth Group: UNH"
];

class AddAssetDropdown extends React.Component{

addTickers = (company) => {
    console.log("This is tickers functions for "+company);
  }

  render(){

    let dropDownTicker = tickerArray.map((company,idx) => {
        return(
        <Dropdown.Item key={idx} onClick={()=>this.addTickers(company)}>
          {company}
          </Dropdown.Item>
        );
      })

    return(
      <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Add a Stock
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {dropDownTicker}
            </Dropdown.Menu>
      </Dropdown>
    );
  }
}
 export default AddAssetDropdown;
