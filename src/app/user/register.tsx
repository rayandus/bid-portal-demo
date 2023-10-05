import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Container, Button, Link, TextField } from '@mui/material';

const Register = () => {
    return (
        <RegisterContainer maxWidth="sm">
            <RegisterCard >
                <Title>Register</Title>
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
                <RegisterButton variant="contained">Register</RegisterButton>
                <LoginLink href="#" underline="always">Login</LoginLink>
            </RegisterCard>
        </RegisterContainer>
    );
};

const RegisterContainer = styled(Container)`
    margin-top: 100px;
`;

const RegisterCard = styled(Card)`
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

const RegisterButton = styled(Button)`
    margin: 30px auto;
    width: 30%;
`;

const LoginLink = styled(Link)`
    margin: 0 auto;
`;

export default Register;
