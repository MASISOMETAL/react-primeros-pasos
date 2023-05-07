import React from 'react';
import styled from 'styled-components';
import logo from "../assets/LogoMASISO.svg";
import { COLOR } from '../constants/color';

const Headers = styled.header`
display: flex;
background-color: ${COLOR.primary};

@media (max-width: 900px) {
    flex-direction: column;
}
`;

const Div1 = styled.div`
display: flex;
align-items: center;
//background-color: #ff0000;
justify-content: center;
flex: 1 0 20%;

@media (max-width: 900px) {
    display: none;
}
`;

const Div2 = styled.div`
display: flex;
align-items: center;
//background-color: #0000ff;
justify-content: center;
flex: 1 0 40%;
`;

const Div3 = styled.div`
display: flex;
align-items: center;
//background-color: #00ff00;
justify-content: space-evenly;
flex: 1 0 40%;

@media (max-width: 450px) {
    padding: 0.6rem 0;
}

`;

const A = styled.a`
text-decoration: none;
color: #3e3e3e;
font-family: 'Poppins', sans-serif;

@media (max-width: 450px) {
    font-size: 14px
}
`;

const ImgLogo = styled.img`
height: auto;
width: 3rem;
`;

const H1Title = styled.h1`

`;

const Input = styled.input`
width: 100%;
height: 70%;
border-radius: 0.2rem;
padding-left: 1rem;

@media (max-width: 900px) {
    width: 90%;
    height: 2rem;
    margin: 0.3rem 0;
    border-radius: 0.7rem;
}
`;

const Header = () => {
    return (
        <Headers>
            <Div1>
                <A href="#"><ImgLogo src={logo} alt="Logo" /></A>
                <H1Title>MASISO</H1Title>
            </Div1>
            <Div2>
                <Input type="text" placeholder='Buscar productos' />
            </Div2>
            <Div3>
                <A href='#'>Creá cuenta</A>
                <A href='#'>Ingresá</A>
                <A href='#'>Mis compras</A>
            </Div3>
        </Headers>
    )
}

export default Header;