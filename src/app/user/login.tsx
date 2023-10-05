import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Container, Button, Link, TextField } from '@mui/material';

const Login = () => {
    return (
        <LoginContainer maxWidth="sm">
            <LoginCard >
                <Title>Login</Title>
                <Email>
                    <Label>Email</Label>
                    <TextField
                        hiddenLabel
                        fullWidth
                        type="email"
                    />
                </Email>
                <Password>
                    <Label>Password</Label>
                    <TextField
                        hiddenLabel
                        fullWidth
                        type="password"
                    />
                </Password>
                <LoginButton variant="contained">Login</LoginButton>
                <RegisterLink href="#" underline="always">Register</RegisterLink>
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

const Title = styled.h2`
    margin: 0;
`;

const Email = styled.div`
    margin-top: 50px;
`;

const Password = styled.div`
    margin-top: 30px;
`;

const Label = styled.div`
    width: 100%;
    display: block;
`;

const LoginButton = styled(Button)`
    margin: 30px auto;
    width: 30%;
`;

const RegisterLink = styled(Link)`
    margin: 0 auto;
`;

export default Login;
