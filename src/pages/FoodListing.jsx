import { Card, Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ProductsCard from '../components/Cards/ProductsCard.jsx';

const Filters = styled.div`
  width: 100%;
  max-width: 1400px;
    padding: 16px;
    background-color: ${({ theme }) => theme.sectionBackground};
    border-radius: 16px;
    margin-bottom: 24px;
`;
const Menu = styled.div``;
const Products = styled.div`
    width: 100%;
    max-width: 1400px;
    padding: 16px;
    background-color: ${({ theme }) => theme.sectionBackground};
    border-radius: 16px;
`;
const FoodListing = () => {
  return (
    <Container>FoodListing
    <Filters>
        <Menu></Menu>
    </Filters>
   
    <Products>
        <CardWrapper>
            <ProductsCard />    
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
        </CardWrapper>
    </Products>
</Container>
  );
}   
export default FoodListing;