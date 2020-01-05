import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Widget04 from './Widget04';


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

class ProductsWidgets extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-4">
                    <Row>
                        <Col sm="12" md="6 mt-2" lg="3">
                            <Widget04  color="info" header="87.500" value="25">Total Price</Widget04>
                        </Col>
                        <Col sm="12" md="6 mt-2" lg="3">
                            <Widget04 icon="icon-user-follow" color="success" header="385" value="25">Total Products</Widget04>
                        </Col>
                        <Col sm="12" md="6 mt-2" lg="3">
                            <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25">Products Sold</Widget04>
                        </Col>
                        <Col sm="12" md="6 mt-2" lg="3">
                            <Widget04 icon="icon-pie-chart" color="primary" header="28%" value="25">Returning Visitors</Widget04>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductsWidgets;
