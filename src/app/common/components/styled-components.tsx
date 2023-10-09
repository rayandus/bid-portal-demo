import styled from '@emotion/styled/macro';
import { Container as MuiContainer } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export const Title = styled.h1`
    margin: 0;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 30px;
`;

export const Container = styled(MuiContainer)`
    margin-top: 100px;
`;

// export const Button = styled(MuiButton)<{ width?: string }>`
//   width: ${({ width }) => width ? width : '30%'};
// `;

export const Button = styled(LoadingButton)<{ width?: string }>`
  width: ${({ width }) => width ? width : '30%'};
  text-transform: unset;

  [class*='loadingIndicator'] {
    position: unset;
    margin-right: 10px;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: block;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
`;
