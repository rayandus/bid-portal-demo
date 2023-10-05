import React, { ComponentProps } from 'react';
import styled from '@emotion/styled/macro';
import { TextField } from '@mui/material';

export interface InputFieldProps extends ComponentProps<typeof TextField> {
    title?: string;
}

const InputField = (props: InputFieldProps) => {
  const { title } = props;

  return (
    <TextFieldContainer>
      {title && <Label>{title}</Label>}
      <TextField
        fullWidth
        size="small"
        type="text"
        {...props}
      />
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div`
  margin-top: 30px;
`;

const Label = styled.div`
  width: 100%;
  display: block;
`;

export default InputField;
