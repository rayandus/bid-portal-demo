import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Container, Button, Link } from '@mui/material';
import { InputField, Title } from '../common/components';

const Login = () => {
  return (
    <LoginContainer maxWidth="sm">
      <LoginCard>
        <Title>Login</Title>
        <InputField title="Email" type="email" />
        <InputField title="Password" type="password" />
        <LoginButton variant="contained">Login</LoginButton>
        <RegisterLink href="#" underline="always">
          Register
        </RegisterLink>
      </LoginCard>
    </LoginContainer>
  );
};

const LoginContainer = styled(Container)`
  margin-top: 100px;
`;

const LoginCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 80px 50px;
  }
`;

const LoginButton = styled(Button)`
  margin: 30px auto;
  width: 30%;
`;

const RegisterLink = styled(Link)`
  margin: 0 auto;
`;

export default Login;
