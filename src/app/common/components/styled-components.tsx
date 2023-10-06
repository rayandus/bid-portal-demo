import styled from '@emotion/styled/macro';
import { Container as MuiContainer, Button as MuiButton } from '@mui/material';

export const Title = styled.h1`
    margin: 0;
    color: rgba(0, 0, 0, 0.87);
`;

export const Container = styled(MuiContainer)`
    margin-top: 100px;
`;

export const Button = styled(MuiButton)<{ width?: string }>`
  width: ${({ width }) => width ? width : '30%'};
`;
