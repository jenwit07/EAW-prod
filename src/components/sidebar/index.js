import React, { Component } from 'react';
import { SideBar, SideBarLink, Btn, Main, MenuBtn, LogOutBtn, LogoutText } from './styles'
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import { withRouter, Redirect } from "react-router-dom";

@inject('menuStore')
@inject('commonStore')
@observer
class Newbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    toggleMenu = () => {
        this.props.menuStore.setToggleMenu()
    }

    isShowBtn = () => {
        if (this.props.menuStore.showMenu) {
            return (
                <i className='fa fa-arrow-left text-white' />
            )
        } else {
            return (
                <i className='fa fa-bars text-white' />
            )
        }
    }

    logoutMenu = () => {
        if (this.props.menuStore.showMenu) {
            return <LogoutText href="#">Log out</LogoutText>;
        }
    }

    handleOnClick = (page) => {
        this.props.history.push(`/dashboard/${page}`)
    }

    handleLogOut = () => {
        this.props.commonStore.resetAuth();
        this.props.history.push(`/login`)
    }


    render() {

        const showMenu = []

        const menuStyles = {
            width: this.props.menuStore.showMenu ? '250px' : '50px'
        }

        if (this.props.menuStore.showMenu) {
            // eslint-disable-next-line
            for (const [index, value] of this.props.menuStore.menu.entries()) {
                showMenu.push(
                        <MainMenuRow color={value.color} onClick={() => this.handleOnClick(value.link)} key={value.name}>
                            <IsShowBtn size={value.size}>
                                <i className={value.fa}></i>
                            </IsShowBtn>
                            <SideBarLink href={value.link}>{value.name}</SideBarLink>
                        </MainMenuRow>
                )
            }

        } else {
            // eslint-disable-next-line
            for (const [index, value] of this.props.menuStore.menu.entries()) {
                showMenu.push(
                    <MainMenuRow color={value.color} key={value.link} onClick={() => this.handleOnClick(value.link)}>
                        <IsShowBtn size={value.size}>
                            <i className={value.fa}></i>
                        </IsShowBtn>
                    </MainMenuRow>
                )
            }
        }


        return (
            <React.Fragment>
                <SideMenu width={menuStyles.width}>
                    <LogoContainer fluid={true}>
                        <Btn onClick={this.toggleMenu}>
                            {this.isShowBtn()}
                        </Btn>
                    </LogoContainer>
                    <MenuContainer>
                        {showMenu}
                    </MenuContainer>
                    <LogoutContainer>
                        <LogOutROW  onClick={() => this.handleLogOut()}>
                            <LogOutBtn>
                                <i className={'fa fa-power-off text-secondary'}></i>
                            </LogOutBtn>
                            {this.logoutMenu()}
                        </LogOutROW>
                    </LogoutContainer>
                </SideMenu>
            </React.Fragment >
        );
    }
}

/* Extender CSS */
const SideMenu = styled(SideBar)`
    width: ${props => props.width};
    transition: all 0s;
`

const IsShowBtn = styled(MenuBtn)`
    font-size: ${props => props.size};
    padding: 8px 0px 8px 8px; 
    float: left;
    :hover {
        color: #f1f1f1;
    }
`

const MenuContainer = styled(Container)`
    width: 100%;
`

const LogOutROW = styled(Row)`
    padding: 8px 0px 8px 12px;
    width: 100%;
`

const LogoutContainer = styled(Container)`
    position: absolute;
    bottom: 0px;
    width: 100%;
    cursor: pointer;
    background-color: rgba(176, 4, 3, 0.3);
    :hover {
        background-color: rgba(176, 4, 3, 0.9);
    }
`

const MainMenuRow = styled(Row)`
    hight: 76.8px
    cursor: pointer;

    :hover {
        background-color: ${props => props.color};
    }
`

const LogoContainer = styled(Container)`
    position: absolute;
    top: 0;
    background-color: rgb(7, 10, 52);
    width: 100%;
    cursor: pointer;
    z-index: 1000;
`

export default withRouter(Newbar);
