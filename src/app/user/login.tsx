import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button, Link } from '@mui/material';
import { Container, InputField, Title } from '../common/components';

const Login = () => {
  return (
    <Background>
      <Container maxWidth="sm">
        <LoginCard>
          <Title>Login</Title>
          <InputField title="Email" type="email" />
          <InputField title="Password" type="password" />
          <LoginButton variant="contained">Login</LoginButton>
          <RegisterLink href="#" underline="always">
            Register
          </RegisterLink>
        </LoginCard>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  margin: 0;
  display: flex;
  height: inherit;
  width: inherit;
  background-color: #003b57;
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
