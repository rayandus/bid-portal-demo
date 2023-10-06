import React from 'react';
import styled from '@emotion/styled/macro';
import { Card, Button } from '@mui/material';
import { AmountField, InputField, Title, Container } from '../common/components';

const CreateBidItem = () => {
  return (
    <>
      <Container maxWidth="md">
        <Title>Create Item</Title>
        <InputField title="Name" />
        <AmountField title="Start Price" />
        <InputField title="Time Window" />
        <Action>
          <CancelButton variant="contained" color="error">
            Cancel
          </CancelButton>
          <CreateButton variant="contained">Create</CreateButton>
        </Action>
      </Container>
    </>
  );
};

// const Panel = styled(Card)`
//   display: flex;
//   flex-direction: column;
//   padding: 80px;

//   @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
//     padding: 80px 50px;
//   }
// `;

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

const CreateButton = styled(Button)`
  width: 30%;
`;

export default CreateBidItem;
