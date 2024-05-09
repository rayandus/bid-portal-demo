import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Alert, Card, TextField } from '@mui/material';
import { Container, Title, Button, LoginAnnouncement } from '../common/components';
import { useAuthenticate } from './hooks';
import { useFormik } from 'formik';
import * as yup from 'yup';

// TO DO: Separate login and auth from user

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const { mutateAsync: authenticate, isSuccess, isLoading, error } = useAuthenticate();

  const formik = useFormik<LoginForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values: LoginForm) => {
      const { email, password } = values;
      authenticate({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
    <Background>
      <Container maxWidth="sm">
        <LoginAnnouncement />
        <LoginCard>
          <Title>Login</Title>
          <Form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
            {error && <Alert severity="error">{error?.response.data.message}</Alert>}
            <EmailInputField
              fullWidth
              size="small"
              type="text"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Action>
              <Button
                variant="contained"
                type="submit"
                loading={isLoading}
                startIcon={<></>}
                loadingPosition="start"
                width="60%"
              >
                Login
              </Button>
              <Link to="/register">Register</Link>
            </Action>
          </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const EmailInputField = styled(TextField)`
  input {
    text-transform: lowercase;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default Login;
