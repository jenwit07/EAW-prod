import React, { Component } from 'react';
import { Col, Row, Button, Card, CardBody, CardTitle, CardText, CardImg, Container, CardHeader, CardFooter } from 'reactstrap';
import CardDetails from './cardDetails';

class ProductCard extends Component {

    render() {
        return (
            <Container noGutters={true} fluid={true}>
                <CardDetails />
            </Container>
        );
    }
}

export default ProductCard;