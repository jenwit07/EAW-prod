import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import BreadcrumbRoot from '../breadcrumbs'
import Analysis from '../../screens/dashboard/analysis'
import Products from '../../screens/dashboard/products'
import Orders from '../../screens/dashboard/orders'
import Members from '../../screens/dashboard/members'


const Body = ({ menuStore }) => {

    const renderRedirect = (page) => {

        switch (page) {
            case "analysis":
                return <Analysis />

            case "products":
                return <Products />

            case "orders":
                return <Orders />

            case "members":
                return <Members />

            default:
                return <Analysis />
        }
    }

    return (
        <Dashboard width={menuStore.showMenu ? '250px' : '50px'}>
            <BreadcrumbRoot />
            {renderRedirect(menuStore.getPageRedirect)}
        </Dashboard>
    )
}

export default inject('menuStore')(observer(Body));


/* Extender CSS */
const Main = styled.div`
    transition: margin-left 0.5s;
    padding: 16px;
    margin-left: 250px;
`

const Dashboard = styled(Main)`
    margin-left:  ${props => props.width};
    transition: all .5s;
    min-height: calc(100vh - 53.59px);
`
