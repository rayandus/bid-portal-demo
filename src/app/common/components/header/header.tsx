import React from 'react';
import styled from '@emotion/styled/macro';
import { AppBar, Container, Toolbar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { useLocation } from 'react-router-dom';
import { ProfileMenu } from '../../../user-profile';

const EXLCUDE_PAGES = ['/login', '/register'];

const Header = () => {
  const { pathname } = useLocation();

  if (EXLCUDE_PAGES.includes(pathname)) {
    return null;
  }

  return (
    <HeaderBar>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <LogoComboMark>
            <AdbIcon />
            <HeaderTitle>Bid Portal</HeaderTitle>
          </LogoComboMark>
          <ProfileMenu />
        </Toolbar>
      </Container>
    </HeaderBar>
  );
};

const HeaderBar = styled(AppBar)`
  background-color: #0081bd;
`;

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
