import React, { useCallback, useState } from 'react';
import { InputAdornment } from '@mui/material';
import InputField, { InputFieldProps } from './input-field';

interface AmountFieldProps extends InputFieldProps {
  currencySymbol?: string;
}

const AmountField = (props: AmountFieldProps) => {
  const { currencySymbol = '$' } = props;

  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const isValid = isValidAmount(e.target.value);
      setIsValid(isValid);
    },
    [],
  );

  return (
    <InputField
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{currencySymbol}</InputAdornment>
        ),
      }}
      error={!isValid}
      helperText={isValid ? undefined : 'Invalid amount'}
      {...props}
    />
  );
};

export const isValidAmount = (amount: string) => {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(amount);
};

export default AmountField;
