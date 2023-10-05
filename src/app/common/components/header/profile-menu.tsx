import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';

const SETTINGS = [
  { id: 'create-new-item', label: 'Create New Item' },
  { id: 'deposit', label: 'Deposit' },
  { id: 'logout', label: 'Logout' },
];

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();

  const path = window.location.pathname;
  const page = path.substring(1);

  const handleToggleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;

    setAnchorElUser((prevState) => (!!prevState ? undefined : target));
  }, []);

  const settings = SETTINGS.filter((setting) => setting.id !== page);

  return (
    <ProfileMenuContainer>
      <ProfileName>Remy Sharp</ProfileName>
      <IconButton onClick={handleToggleMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
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
          <MenuItem key={setting.id} onClick={handleToggleMenu}>
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
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

export default ProfileMenu;
