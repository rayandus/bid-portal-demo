import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const SETTINGS = [
  { id: '/', label: 'Home' },
  { id: '/create-bid-item', label: 'Create New Item' },
  { id: '/deposit', label: 'Deposit' },
  { id: '/logout', label: 'Logout' },
];

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleToggleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event?.currentTarget;

    setAnchorElUser((prevState) => (!!prevState ? undefined : target));
  }, []);

  const handleRedirect = useCallback((path: string) => {
    navigate(path);
    setAnchorElUser(undefined);
  }, [navigate]);

  const settings = SETTINGS.filter((setting) => setting.id !== pathname);

  return (
    <ProfileMenuContainer>
      <ProfileName>Remy Sharp</ProfileName>
      <IconButton onClick={handleToggleMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
      <MenuList
        className="helloWorld"
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={!!anchorElUser}
        onClose={handleToggleMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.id} onClick={() => handleRedirect(setting.id)}>
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </ProfileMenuContainer>
  );
};

const ProfileMenuContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const ProfileName = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;

const MenuList = styled(Menu)`
  top: 48px;

  ul {
    min-width: 200px;
  }
`;

export default ProfileMenu;
