import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    //background-color: #00ff00;
    justify-content: center;
`;

const Box = styled.div`
    display: flex;
    //background-color: #ff0000;
    height: 2rem;
    margin: 0 10%;
    width: 98%;
`;

const ButtonAddLess = styled.button`
    width: 2rem;
    margin: 0 1%;
`;

const ButtonBuy = styled.button`
    width: 5rem;
`;

const Label = styled.label`
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #000;
`;

const BoxBuyButton = () => {

    const [cantidad, setCantidad] = useState(1)

    const addCar = () => {
        setCantidad(1)
    }

    return (
        <Container>
            <Box>
                <ButtonAddLess onClick={() => setCantidad(cantidad - 1)}>-</ButtonAddLess>
                <Label>{cantidad}</Label>
                <ButtonAddLess onClick={() => setCantidad(cantidad + 1)}>+</ButtonAddLess>
            </Box>
            <ButtonBuy onClick={addCar}>Add</ButtonBuy>
        </Container>
    )
}

export default BoxBuyButton;