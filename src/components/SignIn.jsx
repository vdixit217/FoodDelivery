
import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div`
width: 100%;
max-width: 400px;
display: flex
flex-direction: column;
gap: 36px`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 2rem;
  color :${({ theme }) => theme.textPrimary};
`;
const Span = styled.span`
  font-size: 16px;      
  font-weight: 400;
  margin-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const TextButton = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 1rem; 
  cursor: pointer;
  width: 100 %;
  transition: all 0.3s ease ;
  font:weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SignIn = () => {
  return (

    <Container>
      <div>
      <Title>Welcome to Munchies<br/>
        <Span> Please Log In with your details here </Span>
      </Title>
      </div>
      <div style ={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        <TextInput label="Email" type="email" placeholder="Enter your email" />
        <TextInput label="Password" type="password" placeholder="Enter your password" />
        <TextButton>Forgot Password?</TextButton>
        <Button text="Sign In"/>
      </div>
  </Container>
    
  )
}

export default SignIn;
