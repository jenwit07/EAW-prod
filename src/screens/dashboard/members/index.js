import React, { Component } from 'react';
import HomeSpinner from '../../../components/spinner/HomeSpinner'
import { observer, inject } from 'mobx-react';
import { Helmet } from "react-helmet";

class Members extends Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>E-Commerce Administrator : Members Management</title>
        </Helmet>
        <p class="text-center"> members page : comming soon!!  </p>
      </React.Fragment>
    );
  }
}

export default Members;