import React from 'react';
import styled from 'styled-components';
import { Category } from '../utils/data';
import HeaderImage from '../utils/Images/Header.png';
import ProductCategoryCard from '../components/Cards/ProductCategoryCard.jsx';
import ProductCards from '../components/Cards/ProductCards.jsx';
const Container = styled.div`
padding: 20px 30px ;
padding-bottom: 200px;
height: 100%;
width: 100%;
overflow-y: scroll;
display: flex;
flex-direction: column;
gap: 30px;
@media (max-width: 768px) {
  padding: 10px 15px ;
`;
const Section = styled.section`
width: 100%;
max-width: 1400px;
padding: 32px 16px;
display: flex;
flex-direction: column;
gap: 24px;
background-color: ${({ theme }) => theme.sectionBackground};
border-radius: 16px;
`;
const Img = styled.img``;

const Title = styled.div`
display: flex;
flex-wrap: wrap;
gap: 16px;
justify-content: center;
font-size: 24px;
font-weight: 500;
`;
const CardWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 32px;
justify-content: center;
@media (max-width: 768px) {
  gap: 16px;
}
`;

const Home = () => {
  return (
    <Container>
      <Section>
        <Img src={HeaderImage}/>
      </Section>
      <Section>
        <Title> Food Categories</Title>
        <CardWrapper>
          {Category.map((category) => (
            // Render category card here
            <ProductCategoryCard  category={category} />

          ))}
        </CardWrapper>
      </Section>

       <Section>
        <Title> Most Popular </Title>
        <CardWrapper>
          {Category.map((category) => (
            // Render category card here
            <ProductCards/>
          ))}
        </CardWrapper>
      </Section>
    </Container>


  );
};


export {Home} ;
