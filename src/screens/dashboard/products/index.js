import React, { Component } from 'react';
import HomeSpinner from '../../../components/spinner/HomeSpinner'
import { observer, inject } from 'mobx-react';
import ProductsWidgets from '../../../components/widgets/products'
import Table from '../../../components/tables/table'
import { Col, Row, Button, Card, CardBody, CardTitle, CardText, CardImg, Container, CardHeader, CardFooter } from 'reactstrap';
import ProductCard from '../../../components/productCard';
import ProductAddModal from '../../../components/productAdd/productModal';
import { Helmet } from "react-helmet";

@inject('productStore')
@observer
class Product extends Component {


  updateProd = () => {
    this.props.productStore.setLoading()
  }


  render() {
    let { productStore } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>E-Commerce Administrator : Products Management</title>
        </Helmet>
        <Row>
          <Col lg="12">
            <Row noGutters={true} className="text-left">
              <ProductAddModal />
            </Row>
            <ProductsWidgets />
          </Col>
        </Row>
        {productStore.isLoading ? this.updateProd() : <ProductCard />}
      </React.Fragment>
    );
  }
}

export default Product;