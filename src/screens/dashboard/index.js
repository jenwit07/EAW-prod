import React, { Component } from 'react';
import Sidebar from '../../components/sidebar'
import Body from '../../components/body'
import Header from '../../components/header'
import { Row } from 'reactstrap';
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'

@inject('commonStore')
@inject('menuStore')
@observer
class Dashboard extends Component {

  render() {

    this.props.menuStore.setPageRedirect(this.props.match.params.screen)

    return (
      <React.Fragment>
        <Sidebar />
        <DashboardRow noGutters={true}>
          <Header />
        </DashboardRow>
        <DashboardRow noGutters={true}>
          <BodyContainer noGutters={true}>
              <Body />
          </BodyContainer>
        </DashboardRow>
      </React.Fragment>
    );
  }
}

export default Dashboard;

const DashboardRow = styled(Row)`
  padding-left: 0;
  padding-right: 0;
`

const BodyContainer = styled.div`
  position: relative;
  background-color: rgb(229, 237, 245);
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
`