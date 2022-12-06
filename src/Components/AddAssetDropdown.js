import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import './AddAssetDropdown.css';

let tickerAndNameArray = [
  "Alphabet: GOOG","Tesla: TSLA","Salesforce: CRM","Apple: AAPL","Amazon: AMZN","Exxon Mobil: XOM","Microsoft: MSFT","Nvidia: NVDA","Walmart: WMT"
];

let tickerArray = [
  "GOOG","TSLA","CRM","AAPL","AMZN","XOM","MSFT","NVDA","WMT"
];

class AddAssetDropdown extends React.Component{

addTickers = (company) => {
    console.log("This is tickers functions for "+company);
  }


  render(){

   
    let portTickerArr = this.props.portfolio.map(obj=>obj.ticker)
    


    let dropDownTicker = tickerAndNameArray.map((company,idx) => {

         let isActionable = true;
          for(let i = 0; i < tickerArray.length; i++){
              if(company.includes(portTickerArr[i])){
                isActionable=false;
              }
          }
          if(isActionable){
            return(
            <Dropdown.Item key={idx} onClick={()=>this.props.updateStock(tickerArray[idx])} id="dropBtn">
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
      <>
      <Dropdown id="dropBtn">
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ background: '#53b910' }}>
              Add a Stock
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropDownMenu">
              {dropDownTicker}
            </Dropdown.Menu>
      </Dropdown>
      </>
    );
  }
}
 export default AddAssetDropdown;
