import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('menuStore')
@observer
class BreadcrumbRoot extends Component {

  Item = [];

  /* Change State Menu */

  menuChange() {

  }

  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="div">
            <NavLink to='/dashboard/analysis' onClick={() => this.props.menuStore.setPageRedirect('analysis')}>
              Home
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbItem tag="div">
            <NavLink to={'/' + this.props.menuStore.pageRedirect}>
              {this.props.menuStore.pageRedirect}
            </NavLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div >
    );
  }
};

export default BreadcrumbRoot;