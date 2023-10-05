import React from 'react';
import styled from '@emotion/styled/macro';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import ProfileMenu from './profile-menu';

const Header = () => {
  return (
    <AppBar component="nav">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <LogoComboMark>
            <AdbIcon />
            <HeaderTitle>Bid Portal</HeaderTitle>
          </LogoComboMark>
          <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const LogoComboMark = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const HeaderTitle = styled.span`
  margin-left: 10px;
`;

export default Header;
