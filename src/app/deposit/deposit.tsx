import React from 'react';
import styled from '@emotion/styled/macro';
import { Button } from '@mui/material';
import { AmountField, Container, Title } from '../common/components';

const Deposit = () => {
  return (
    <>
      <Container maxWidth="md">
        <Title>Deposit</Title>
        <AmountField title="Amount" />
        <Action>
          <CancelButton variant="contained" color="error">
            Cancel
          </CancelButton>
          <DepositButton variant="contained">Deposit</DepositButton>
        </Action>
      </Container>
    </>
  );
};

const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 20px;
  margin: 30px auto;
`;

const CancelButton = styled(Button)`
  width: 30%;
`;

const DepositButton = styled(Button)`
  width: 30%;
`;

export default Deposit;
