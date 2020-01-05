import styled from 'styled-components';

export const SideBar = styled.div`
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: width 0.5s;
    padding-top: 60px;
`
export const SideBarLink = styled.p`
    position: relative;
    font-size: 25px;
    color: #818181;
    text-align: center;
    top: 10px;
    left: 15px;
    transition: 0.3s;

    :hover {
        color: #f1f1f1;
    }
`
export const Header = styled.div`
        background-color: coral;
        width: 100;
`

export const Btn = styled.div`
    position: relative;
    top: 0;
    left: -4px;
    width: 100%;
    font-size: 36px;
    cursor: pointer;
    :hover {
        color: #f1f1f1;
    }
`

export const MenuBtn = styled.a`
    color: rgb(255,255,255);
    cursor: pointer;

    :hover {
        color: #f1f1f1;
    }
`

//maybe merge with close btn
export const LogOutBtn = styled.a`
    position: relative;
    bottom: 0;
    font-size: 25px;
    color: #818181;
    
    :hover {
        color: rgb(66, 156, 227);
    }
`

export const Main = styled.div`
    transition: margin-left 0.5s;
    padding: 16px;
    margin-left: 250px;
`

export const LogoutText = styled.p`
    position: absolute;
    font-size: 20px;
    margin-bottom: 10px;
    margin-left: 40px;
    color: #818181;
    transition: 0.3s;

    :hover {
        color: #f1f1f1;
    }
`




/* TODO : Implement @media for multiple device
@media screen and (max-height: 450px) {
    .sidebar {padding-top: 15px;}
    .sidebar a {font-size: 18px;}
  } */