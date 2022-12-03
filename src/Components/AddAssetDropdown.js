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

    //console.log(this.props.portfolio);
    //console.log(this.props.portfolio.map(obj=>obj.ticker));
    let portTickerArr = this.props.portfolio.map(obj=>obj.ticker)
    //console.log(tickerArray)


    let dropDownTicker = tickerArray.map((company,idx) => {

         let isActionable = true;
          for(let i = 0; i < tickerArray.length; i++){
              if(company.includes(portTickerArr[i])){
                isActionable=false;
              }
          }
          if(isActionable){
            return(
            <Dropdown.Item key={idx} onClick={()=>this.addTickers(company)}>
            {company}
            </Dropdown.Item>);
          }else{
            return(
            <Dropdown.Item key={idx} disabled>
            {company}
            </Dropdown.Item>
              );
          }
        
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
