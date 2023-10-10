import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AmountField, Button } from '../common/components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { formatAmount } from '../common/helpers';
import usePlaceBid from './hooks/use-place-bid';

interface PlaceBidForm {
  amount: number | string;
}

interface PlaceBidProps {
  bidItemName: string;
  bidItemId: string;
  bidItemStartingPrice: number;
}

const PlaceBid = (props: PlaceBidProps) => {
  const { bidItemName, bidItemId, bidItemStartingPrice } = props;

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { mutateAsync: placeBid, isLoading, isSuccess, error, reset } = usePlaceBid();

  const validationSchema = useMemo(() => {
    const formattedStartingPrice = formatAmount({ value: bidItemStartingPrice });

    return yup.object({
      amount: yup
        .number()
        .moreThan(bidItemStartingPrice, `Bid amount should be more than ${formattedStartingPrice}`)
        .required('Starting price is required'),
    });
  }, [bidItemStartingPrice]);

  const formik = useFormik<PlaceBidForm>({
    initialValues: {
      amount: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values: PlaceBidForm) => {
      const { amount } = values;

      placeBid({ bidItemId, amount: amount as number });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [formik, isSuccess]);

  const handleSubmit = useCallback(() => {}, []);

  const handleOpen = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsDialogOpen(false);
    formik.resetForm();
  }, [formik]);

  return (
    <>
      <Button variant="contained" size="small" width="100%" onClick={handleOpen}>
        Bid
      </Button>
      <Dialog open={isDialogOpen} onClose={handleClose} fullWidth>
        <DialogTitle>
          <span>Place Bid for</span> <ItemName>{bidItemName}</ItemName>
        </DialogTitle>
        <CloseIconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </CloseIconButton>
        <DialogContent>
          <Form
            onSubmit={formik.handleSubmit}
            onSubmitCapture={() => reset()}
            onChange={() => reset()}
            noValidate
            autoComplete="off"
          >
            {isSuccess && <Alert severity="success">Successfully placed bid. You are now the highest bidder.</Alert>}
            {error && <Alert severity="error">{error?.response.data.message}</Alert>}
            <AmountField
              fullWidth
              size="small"
              type="number"
              name="amount"
              label="Bid Amount"
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
          </Form>
        </DialogContent>
        <DialogActionsStyled>
          <Button variant="contained" color="error" width="30%" disabled={isLoading} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            width="30%"
            loading={isLoading}
            startIcon={<></>}
            loadingPosition="start"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActionsStyled>
      </Dialog>
    </>
  );
};

const ItemName = styled.span`
  font-weight: bold;
`;

const CloseIconButton = styled(IconButton)`
  position: absolute;
  right: 8px;
  top: 8px;
`;

const DialogActionsStyled = styled(DialogActions)`
  padding: 8px 24px 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default PlaceBid;
