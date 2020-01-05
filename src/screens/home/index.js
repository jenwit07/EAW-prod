import React, { Component } from 'react';
import HomeSpinner from '../../components/spinner/HomeSpinner'
import { observer, inject } from 'mobx-react'
import HomeRoutes from '../../config/HomeRoutes'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios';

@inject('commonStore')
@observer
class Index extends Component {

    RedirectPage = [];


    LOADER = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (this.props.commonStore.needLogIn) {
                    this.RedirectPage.push(
                        <Redirect to='/login' />
                    )
                    resolve();

                } else {
                    this.RedirectPage.push(
                        <Redirect to='/dashboard/products' />
                    )
                    resolve();

                }
            }, 2000);
        })
    }

    render() {

        let haveToken = Cookies.get('authorization');

        if(haveToken) {
            axios.defaults.headers.common['Authorization'] = haveToken;
        }

        return (
            <React.Fragment>
                <HomeRoutes />
            </React.Fragment>
        );
    }
}

export default Index;