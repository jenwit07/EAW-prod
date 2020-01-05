import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import { inject, observer } from 'mobx-react';


@inject('menuStore')
@observer
class Header extends Component {

    render() {

        const menuStyles = {
            width: this.props.menuStore.showMenu ? '250px' : '50px'
        }

        return (
            <React.Fragment>
                <HeaderContainer width={menuStyles.width}>
                </HeaderContainer>
            </React.Fragment>
        );
    }
}

export default Header;

const Main = styled.div`
    transition: margin-left 0.5s;
    margin-left: 250px;
`

const HeaderContainer = styled(Main)`
position: relative;
z-index: 10;
    width: 100%;
    height: 53.6px;
    background-color: rgb(7, 10, 52);
    box-shadow: 0px 15px 10px -15px #111;  
    margin-left:  ${props => props.width};
    transition: all .0s;
`