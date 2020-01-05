import React, { Component } from 'react';
import HomeSpinner from '../../../components/spinner/HomeSpinner'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Helmet } from "react-helmet";

class Orders extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>E-Commerce Administrator : Orders Management</title>
        </Helmet>
        <p class="text-center"> orders page : comming soon!! </p>
      </React.Fragment>
    );
  }
}

export default Orders;