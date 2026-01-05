import React from "react";
import styled from "styled-components";
import {Modal} from "@mui/material";
import LogoImage from "../utils/Images/Logo.png";
import AuthImage from "../utils/Images/AuthImage.jpg";
import { Close } from "@mui/icons-material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useState } from "react";

const CloseButton = styled.div`
position: absolute; 
top: 20px;
right: 20px;
cursor: pointer;
border-radius: 50%;
padding: 4px;
width: 32px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${({ theme }) => theme.primary};
&:hover {
background-color: ${({ theme }) => theme.primary};
;
`;

const Container = styled.div`
flex: 1;
display: flex;
height: 100vh;
background: ${({ theme } )=> theme.bg};
`;

const Left = styled.div`
flex: 1;
display: flex;
position: relative;

@media screen and (max-width: 768px) {
  display: none;}
`;

const Right = styled.div`
flex: 0.9;
display: flex;
position: relative;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
gap:  16px;
@media screen and (max-width: 768px) {
  flex: 1;
  }

`;

const Logo = styled.img`
height: 40px;
position: absolute;
top: 4px;
left: 6px;
z-index: 10;
`;

const Image = styled.img`
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
`;

const Text = styled.p`
display: flex;
gap: 12px;
font-size: 16px;
text-align: center;
color: ${({ theme }) => theme.text_secondary};
margin-top: 16px;
@media screen and (max-width: 400px) {
  font-size: 14px;
}
`;
const TextButton = styled.div`
cursor: pointer;
color: ${({ theme }) => theme.primary};
transition: all 0.3s ease;
font-weight: 500;
`;

const Authentication = ({openAuth , setOpenAuth}) => {
    const [login, setLogin] = useState(false);
  return(
  <Modal open = {openAuth} onClose={() => setOpenAuth(false)}   >
    <Container>
        <Left> <Logo src={LogoImage}/>
           <Image src={AuthImage}/>
         </Left>
        <Right>
            <CloseButton >
                <Close onClick={() => setOpenAuth(false)}/>
            </CloseButton>

            {login ? (<>

            <SignIn setLogin={setLogin}/>
            <Text>
             {""}Don't have an account?  {""}
            <TextButton onClick={() => setLogin(false)}>Sign Up</TextButton>
            </Text>

            </>)
             : 
             (<>
             <SignUp setLogin={setLogin}/>
             <Text>
             Already have an account? {" "}
            <TextButton onClick={() => setLogin(true)}>Sign In</TextButton>
            </Text>
             </>
             )}
            
            </Right>  
    </Container>
  </Modal>
    );
};

export default Authentication;