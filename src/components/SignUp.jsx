
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
  color :${({ theme }) => theme.Primary};
`;
const Span = styled.span`
  font-size: 16px;      
  font-weight: 400;
  margin-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const SignUp = () => {
  return (

    <Container>
      <div>
      <Title>Create new account </Title>
      <Span>Please fill in the details below to create a new account.</Span>
        </div>
      <div style ={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
        <TextInput label="Name" type="text" placeholder="Enter your name" />
        <TextInput label="Email" type="email" placeholder="Enter your email" />
        <TextInput label="Password" type="password" placeholder="Create a password" />
        <Button text="Sign Up"/>
        <Span>By signing up, you agree to our Terms & Conditions and Privacy Policy.

      </Span>
      </div>
  </Container>
    
  );
};

export default SignUp;
