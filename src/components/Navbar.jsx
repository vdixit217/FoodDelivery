import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImg from "../utils/Images/Logo.png";
import { FavoriteBorder, SearchRounded, ShoppingCartOutlined } from "@mui/icons-material";
import Button from "./Button";
import { MenuRounded } from "@mui/icons-material";
import { useState } from "react";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  gap: 14px;
  font-size: 1rem;
`;

const NavLogo = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  color: inhert;

`;

const Logo = styled.img`
  height: 34px;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
 display: flex;
 align-items: center;
 color: ${({ theme }) => theme.text_primary};
 text-decoration: none;
 font-weight: 500;
 cursor: pointer;
 transition: all 1s slide-in;
 &:hover {
    color: red;
    text-decoration: underline;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  width: 100%;
  height: 100%;
  padding: 0 6px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
  display: none;}

`;

const MobileIcons= styled.div` 

color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;


const MobileIcon = styled.div` 
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  position: absolute;
  gap: 20px;
  padding: 0 6px;
  list-style: none;
  width: 80px;
  padding: 12px 40px 24px 40px;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};  
  border-radius: 0 0 0 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;


const Navbar = ({ setOpenAuth, openAuth }) => {
  
  const[isOpen, setIsOpen] = useState(false);
    return (
    <Nav>
      <NavContainer>

        <MobileIcon onClick ={() => setIsOpen(!isOpen)}>
        <MenuRounded sx={{ color: "inherit", fontSize: "32px" }}/>
        </MobileIcon>
        <NavLogo to="/">
          <Logo src={LogoImg} alt="Logo" />
        </NavLogo>

        <MobileIcons>
          
        <NavLink to="/search">
        <SearchRounded sx={{ color: "inherit", fontSize: "28px" }}/>
        </NavLink>

        <NavLink to="/favourites">
        <FavoriteBorder sx={{ color: "inherit", fontSize: "28px", marginLeft: "20px" }}/> 
        </NavLink>

        <NavLink to="/cart">
        <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px", marginLeft: "20px" }}/> 
        </NavLink>

        <Button text="Signin" small/>
</MobileIcons>

        <NavItems>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dishes">Dishes</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavItems>


      {
isOpen && (

  <MobileMenu isOpen={isOpen}>

          <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home</NavLink>
          <NavLink to="/dishes" onClick={() => setIsOpen(false)}>
          Dishes</NavLink>
          <NavLink to="/orders" onClick={() => setIsOpen(false)}
          >Orders</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact</NavLink>
          <div style={{display: "flex",
  gap: "2px"}}>

                
          <Button text="Signin" extra small onClick={() => {setOpenAuth(true); setIsOpen(false);}}/>
          <Button text="Signup"  outlined extra small onClick={() => setIsOpen(false)}/>
        
          </div>
      
  </MobileMenu>
)       
    }

      <ButtonContainer>
        <NavLink to="/search">
        <SearchRounded sx={{ color: "inherit", fontSize: "28px" }}/>
        </NavLink>

        <NavLink to="/favourites">
        <FavoriteBorder sx={{ color: "inherit", fontSize: "28px", marginLeft: "20px" }}/> 
        </NavLink>

        <NavLink to="/cart">
        <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px", marginLeft: "20px" }}/> 
        </NavLink>

        <Button text="Signin" small onClick={() => setOpenAuth(true)}/>
        
      </ButtonContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
