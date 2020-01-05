import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import Widget01 from './Widget01';
import Widget02 from './Widget02';
import Widget03 from './Widget03';
import Widget04 from './Widget04';
import { Line } from 'react-chartjs-2';


// Brand Card Chart
const makeSocialBoxData = (dataSetNo) => {
  const socialBoxData = [
    { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
    { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
    { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
    { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
  ];

  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class AnalysisWidgets extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-cogs" color="primary" variant="2" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-laptop" color="info" variant="2" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-moon-o" color="warning" variant="2" />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02 header="$1.999,50" mainText="Income" icon="fa fa-bell" color="danger" variant="2" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AnalysisWidgets;
