
import styled from "styled-components";
import {  Rating } from "@mui/material";
import FavouriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';  
import React from "react";
import {CircularProgress } from "@mui/material";

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 180px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  @media (max-width: 600px) {
    height: 180px;
  }
`;
const Menu = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.black};
  }

  &:hover ${Image} {
    opacity: 0.9;
  }
  &:hover ${Menu} {
    display: flex;
  }
`;
const MenuItem = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
const Rate = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  opacity: 0.9;
  transition: all 0.3s ease-out;
`;
const Details = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 4px 10px;
  transition: all 0.3s ease-out;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
  font-size: 12px;
  font-weight: 600; 
  color: green;
`;

const ProductsCard = () => {
  return(
    <Card>
      <Top>
        <Image src="https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=300&q=82&auto=format&fit=crop&dm=1749310239&s=55dfe0ef58d90bda092dc7bc2de53c76" />
        <Menu>
          <MenuItem>
          <FavouriteRoundedIcon sx={{ fontSize: "16px", color: "black" }} />
          </MenuItem>
          <MenuItem>
          <ShoppingCartRoundedIcon sx={{ fontSize: "16px", color: "black" }} />
          </MenuItem>
        </Menu>
        <Rate>
          <Rating value={3.5} sx={{ fontSize: "14px" }}> 
          </Rating>
        </Rate>

      </Top>
      <Details>
        <Title>
          Burger
        </Title>
        <Desc>Burger desc</Desc>
        <Price>$12.00 <Span><Percent>(20% off)</Percent></Span></Price>
      </Details>
     

    </Card>
  );
};

export default ProductsCard;