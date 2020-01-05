import React, { Component } from 'react';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

export default class Index extends Component {

  render() {
    return <HomeSpinner  color="white" style={{width:'4rem', height: '4rem'}} />;
  }
}

const HomeSpinner = styled(Spinner)`
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -2rem;
    margin-top: -2rem;
`