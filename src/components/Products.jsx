import React, { useState } from 'react';
import styled from 'styled-components';
import { product } from '../constants/moc';
import { COLOR } from '../constants/color';
import BoxBuyButton from './BoxBuyButton';


const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #00ff00;
`;


const DivContainer = styled.div`  
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  //background-color: #00ffff;
  width: 95%;
  height: auto;
  padding: 1rem;
`;

const Box1 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #bbb;
  border: 0.15rem solid ${COLOR.primary};
  margin: 1% 1%;
  flex: 1 0 20%;
  min-width: 17rem;
  max-width: 20%;
  height: 400px;
`;

const BoxImg = styled.div`
  display: flex;
  //background-color: #ff0000;
  justify-content: center;
  flex: 1 0 50%;
`;

const Img = styled.img`
  margin-top: 1rem;
  width: 60%;
  height: 80%;
`;

const BoxContent = styled.div`
  //background-color: #0000ff;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 0 50%;
  justify-content: space-evenly;
  padding: 0 1.2rem;
`;

const Parrafo = styled.p`
  font-family: 'Poppins', sans-serif;
`;

const SpanP = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

const Products = () => {

  const pan = product.panes;

  return (
    <Section>
      <DivContainer>
        {pan.map((item, index) =>
          <Box1 key={index}>
            <BoxImg>
              <Img src={item.img} alt={item.tipo} />
            </BoxImg>
            <BoxContent>
                <Parrafo><SpanP>Nombre:</SpanP> {item.tipo}</Parrafo>
                <Parrafo><SpanP>Valor:</SpanP> {item.valor}</Parrafo>
                <Parrafo><SpanP>Descripción:</SpanP> {item.descripcion}</Parrafo>
                <BoxBuyButton />
            </BoxContent>
          </Box1>)}
      </DivContainer>
    </Section>
  )
}

export default Products