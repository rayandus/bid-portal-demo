import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Alert, InputAdornment } from '@mui/material';
import { AmountField, Container, Title, Button } from '../common/components';
import { useDeposit } from './hooks';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formatAmount } from '../common/helpers';

const validationSchema = yup.object({
  amount: yup
    .number()
    .min(1, 'Starting price minimum is 1')
    .required('Starting price is required'),
});

interface DepositForm {
  amount: number | string;
}

const Deposit = () => {
  const [amount, setAmount] = useState<number>();

  const { mutateAsync: deposit, isLoading, isSuccess, error, reset } = useDeposit();

  const navigate = useNavigate();

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const formik = useFormik<DepositForm>({
    initialValues: {
      amount: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values: DepositForm) => {
      const amount = values.amount as number;

      deposit({ amount });
      setAmount(amount);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [formik, isSuccess]);

  const formattedAmount = useMemo(() => {
    return amount ? formatAmount({ value: amount }) : '';
  }, [amount]);

  return (
    <>
      <Container maxWidth="md">
        <Title>Deposit</Title>
        <Form
          onSubmit={formik.handleSubmit}
          onSubmitCapture={() => reset()}
          onChange={() => reset()}
          noValidate
          autoComplete="off"
        >
          {isSuccess && (
            <Alert severity="success">Successfully deposited: {formattedAmount}</Alert>
          )}
          {error && <Alert severity="error">{error?.response.data.message}</Alert>}
          <AmountField
            fullWidth
            size="small"
            type="number"
            name="amount"
            label="Amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Action>
            <Button
              variant="contained"
              color="error"
              disabled={isLoading}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              loading={isLoading}
              startIcon={<></>}
              loadingPosition="start"
            >
              Deposit
            </Button>
          </Action>
        </Form>
      </Container>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  margin: auto;
`;

export default Deposit;
