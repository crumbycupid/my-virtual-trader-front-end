import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './AssetCard.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

class AssetCard extends React.Component {

  showBuyOrSellModel = () => {
    console.log("Show the buy or sell modal");
  }


  render() {

    let currentStock = {};

    for (let i = 0; i < this.props.stockData.length; i++) {
      if (this.props.stockData[i].ticker === this.props.asset.ticker) {
        currentStock = this.props.stockData[i];
        //console.log(currentStock);
      }
    }


    let displayHours = [];

    let d = new Date();
    let hour = d.getHours() + 1;

    let timeVar;

    for (let t = hour; t < 24 + hour; t++) {
      if (t > 12) {
        timeVar = t % 12;
        if (timeVar === 0) {
          timeVar = 12;
        }
      } else {
        timeVar = t;
      }
      displayHours.push(timeVar);
    }

    //console.log(displayHours);

    let formattedHours = displayHours.map(hour => `${hour}:00`)

    // console.log(formattedHours.length);

    //currentStock.results[currentStock.count-1].c}

    let resultsLength = currentStock.count - 1;
    let resultsLength24prior = resultsLength - 24;
    let displayData = [];

    for (let j = resultsLength24prior; j < resultsLength; j++) {
      displayData.push(currentStock.results[j].c)
    }

    //console.log(displayData);
    //console.log(displayData.length);

    let labels = formattedHours; //this is the x axis data
    let options = {
      plugins: {
        legend: {
          display: false
        },
        title: { display: false, text: 'Ticker or Name' }
      }
    };

    let data2 = displayData;// this is the price or yaxis data
    let data = {
      labels,
      datasets: [{ data: data2, borderColor: 'rgb(255, 99, 132)' }]
    }
    //console.log(this.props.stockData)
    //console.log(this.props.asset.ticker)



    return (
      <Col>
        <Card style={{ width: '18rem' }} id="stocksCard">
          <Line
            options={options}
            data={data}
          />
         
          <Card.Body>
            <Card.Title>{this.props.asset.ticker}</Card.Title>
            <Card.Text>
              {`Current Price: $${currentStock.results[currentStock.count - 1].c}`}

            </Card.Text>
            <div className="boxDeleteButton">
              <button className="buttonOne green-radial gradient-background" onClick={() => this.props.deleteStock(this.props.asset.ticker)}>Remove Stock</button>
            </div>
     
          </Card.Body>
        </Card>

      </Col>
    );
  }
}

export default AssetCard;
