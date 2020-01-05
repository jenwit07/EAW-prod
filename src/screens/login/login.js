import React, { Component } from 'react'
import axios from 'axios'
import { DarkBackground, LogInPage, LogIn, LogInForm, InputLogIn, ButtonLogIn, JoinMessage, Message, LogoImg } from './styles'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import { globalURL } from '../../common/url'
import HomeSpinner from '../../components/spinner/HomeSpinner'
import { Helmet } from "react-helmet";

@inject('commonStore')
@observer
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            isAlert: false,
            alertMsg: ''
        };
    }


    alertbox = (errorLog) => {
        return (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error  </strong> {errorLog}
                <button onClick={() => this.hideAlertBox()} type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }

    hideAlertBox = () => {
        this.setState({
            isAlert: false,
            alertMsg: ""
        })
    }

    handleSubmit = event => {

        if (this.state.username === '') {
            return (
                this.setState({
                    isAlert: true,
                    alertMsg: "Username is required"
                })
            )
        }

        if (this.state.password === '') {
            return (
                this.setState({
                    isAlert: true,
                    alertMsg: "Password is required"
                })
            )
        }

        this.setState({
            isLoading: true
        })

        const config = { headers: { 'Content-Type': 'application/json' } };

        axios.post(`${globalURL}/signin`, {
            username: this.state.username,
            password: this.state.password

        }, config).then(res => {
            console.log('res.data.success === ' + res.data.accessToken)
            console.log(typeof res.data.success)
            if (res.data.success) {
                console.log('this case res.data.success === true')
                Cookies.set("authorization", res.data.accessToken);
                Cookies.set("category", res.data.category);
                this.props.commonStore.setAccessToken(res.data.accessToken)
                this.props.commonStore.setLogInStatus()
                axios.defaults.headers.common['Authorization'] = res.data.accessToken;
                this.setState({
                    isLoading: false,
                    username: '',
                    password: '',
                })
            } else {
                console.log('this false login')
                this.setState({
                    isLoading: false,
                    isAlert: true,
                    alertMsg: res.data.success.data,
                    username: '',
                    password: '',
                })
            }
        })
    }

    handleChangeUsername = event => {
        console.log(event.target.value)
        this.setState({ username: event.target.value });

    }

    handleChangePassword = event => {
        console.log(event.target.value)
        this.setState({ password: event.target.value });

    }

    input = null;

    onKeyDown = (event) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.handleSubmit();
        }
    }

    render() {
        let { isLoading, isAlert, alertMsg } = this.state;
        let haveToken = Cookies.get('authorization');

        if (haveToken) {
            this.props.commonStore.setAccessToken(haveToken)
            return (
                <React.Fragment>
                    <Redirect to='/dashboard/products' />
                </React.Fragment>
            )
        }

        if (isLoading) {
            return (
                <DarkBackground>
                    <HomeSpinner />
                </DarkBackground>
            )
        }

        return (
            <DarkBackground>
                <Helmet>
                    <title>E-Commerce Administrator : Log In</title>
                </Helmet>
                {isAlert ? this.alertbox(alertMsg) : null}
                <LogInPage>
                    <LogIn>
                        <LogoImg />
                        <LogInForm onKeyDown={this.onKeyDown}>
                            <InputLogIn type="text" placeholder="username" onChange={this.handleChangeUsername} />
                            <InputLogIn type="password" placeholder="password" onChange={this.handleChangePassword} />
                            <ButtonLogIn type="submit" onClick={this.handleSubmit}>login</ButtonLogIn>
                            <JoinMessage>Not registered? <Message href="#">Create an account</Message></JoinMessage>
                        </LogInForm>
                    </LogIn>
                </LogInPage>
            </DarkBackground>
        );
    }
}

export default Login;
