import styled from 'styled-components';
import background from '../../dark.jpg'

export const DarkBackground = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    overflow: auto;
    background-image: url(${background});
    font-family: "Roboto", sans-serif;    
`

export const LogInPage = styled.div`
    width: 360px;
    padding: 8% 0 0;
    margin: auto; 
`

export const LogIn = styled.div`
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`

export const LogInForm = styled.div`
    padding-top: 25px;
`

export const InputLogIn = styled.input`
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
`

export const ButtonLogIn = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;

    :hover {
        background: #43A047;
    }

    :active {
        background: #43A047;
    }

    :focus {
        background: #43A047;
    }
`

export const JoinMessage = styled.p`
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
`

export const Message = styled.a`
    color: #4CAF50;
    text-decoration: none;
`

export const LogoImg = styled.img.attrs({
    src: require('../../logo-final.png')
})`
width: 50%;
`