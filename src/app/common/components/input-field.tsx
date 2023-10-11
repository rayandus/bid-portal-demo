import React, { ComponentProps, forwardRef } from 'react';
import styled from '@emotion/styled/macro';
import { TextField } from '@mui/material';

export interface InputFieldProps extends ComponentProps<typeof TextField> {
  className?: string;
  title?: string;
}

const InputField = (props: InputFieldProps, ref?: React.Ref<HTMLInputElement>) => {
  const { className, title, ...restProps } = props;

  return (
    <TextFieldContainer className={className}>
      {title && <Label>{title}</Label>}
      <TextField inputRef={ref} fullWidth size="small" type="text" {...restProps} />
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div`
  margin-top: 30px;
`;

const Label = styled.div`
  width: 100%;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
`;

export default forwardRef(InputField);
