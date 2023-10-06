import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button, Link } from '@mui/material';
import { Container, InputField, Title } from '../common/components';

const Register = () => {
  return (
    <Background>
      <Container maxWidth="sm">
        <RegisterCard>
          <Title>Register</Title>
          <InputField title="Email" type="email" />
          <InputField title="Password" type="password" />
          <RegisterButton variant="contained">Register</RegisterButton>
          <LoginLink href="#" underline="always">
            Login
          </LoginLink>
        </RegisterCard>
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

const RegisterCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 80px 50px;
  }
`;

const RegisterButton = styled(Button)`
  margin: 30px auto;
  width: 30%;
`;

const LoginLink = styled(Link)`
  margin: 0 auto;
`;

export default Register;
