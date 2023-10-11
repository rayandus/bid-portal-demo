import React, { useCallback, useState, forwardRef } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { InputFieldProps } from './input-field';

interface AmountFieldProps extends InputFieldProps {
  currencySymbol?: string;
  onValidation?: (isError: boolean) => void;
}

const AmountField = (props: AmountFieldProps, ref?: React.Ref<HTMLInputElement>) => {
  const { currencySymbol = '$', onValidation = () => {}, ...restProps } = props;

  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const isValid = isValidAmount(e.target.value);
      setIsValid(isValid);

      onValidation(!isValid);
    },
    [onValidation],
  );

  return (
    <TextField
      ref={ref}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{currencySymbol}</InputAdornment>
        ),
      }}
      error={!isValid}
      helperText={isValid ? undefined : 'Invalid amount'}
      {...restProps}
    />
  );
};

export const isValidAmount = (amount: string) => {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(amount);
};

export default forwardRef(AmountField);
