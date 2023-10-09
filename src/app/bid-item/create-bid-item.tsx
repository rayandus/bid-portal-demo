import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Alert, TextField, InputAdornment } from '@mui/material';
import { AmountField, Title, Container, ExpiryDuration, Button } from '../common/components';
import { useCreateBidItem } from './hooks';
import TimeWindow from '../common/components/time-window';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters in length')
    .max(50, 'Name should be of maximum 100 characters in length')
    .required('Name is required'),
  startPrice: yup.number().min(1, 'Starting price minimum is 1').required('Starting price is required'),
});

interface BidItemForm {
  name: string;
  startPrice: number | string;
}

const CreateBidItem = () => {
  const [expiryDuration, setExpiryDuration] = useState<ExpiryDuration>();

  const { mutateAsync: createBidItem, isLoading, isSuccess, error, reset } = useCreateBidItem();

  const navigate = useNavigate();

  const formik = useFormik<BidItemForm>({
    initialValues: {
      name: '',
      startPrice: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values: BidItemForm) => {
      const { name, startPrice } = values;

      createBidItem({
        name,
        startPrice: startPrice as number,
        expiryDuration: expiryDuration as ExpiryDuration,
        isActive: true,
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [formik, isSuccess]);

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleExpiryDuration = useCallback((data: ExpiryDuration) => setExpiryDuration(data), []);

  return (
    <>
      <Container maxWidth="md">
        <Title>Create Item</Title>
        <Form
          onSubmit={formik.handleSubmit}
          onSubmitCapture={() => reset()}
          onChange={() => reset()}
          noValidate
          autoComplete="off"
        >
          {isSuccess && <Alert severity="success">Successfully created an item</Alert>}
          {error && <Alert severity="error">{error?.response.data.message}</Alert>}
          <TextField
            fullWidth
            size="small"
            type="text"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <AmountField
            fullWidth
            size="small"
            type="number"
            name="startPrice"
            label="Start Price"
            value={formik.values.startPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.startPrice && Boolean(formik.errors.startPrice)}
            helperText={formik.touched.startPrice && formik.errors.startPrice}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TimeWindowStyled onChange={handleExpiryDuration} />
          <Action>
            <CancelButton variant="contained" color="error" disabled={isLoading} onClick={handleCancel}>
              Cancel
            </CancelButton>
            <CreateButton
              type="submit"
              variant="contained"
              loading={isLoading}
              startIcon={<></>}
              loadingPosition="start"
            >
              Create
            </CreateButton>
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

const TimeWindowStyled = styled(TimeWindow)`
  margin-top: -20px;
`;

const CancelButton = styled(Button)`
  width: 30%;
`;

const CreateButton = styled(Button)`
  width: 30%;
`;

export default CreateBidItem;
