import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Container, Button } from '@mui/material';
import { AmountField, Title } from '../common/components';

const Deposit = () => {
  return (
    <>
      <Header />
      <DepositContainer maxWidth="md">
        <Panel>
          <Title>Deposit</Title>
          <AmountField title="Amount" />
          <Action>
            <CancelButton variant="contained" color="error">
              Cancel
            </CancelButton>
            <DepositButton variant="contained">Deposit</DepositButton>
          </Action>
        </Panel>
      </DepositContainer>
    </>
  );
};

const Header = styled.div``;

const DepositContainer = styled(Container)`
  margin-top: 100px;
`;

const Panel = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    padding: 80px 50px;
  }
`;

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
