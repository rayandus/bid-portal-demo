import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled/macro';
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAccountBalance, useUserProfile } from './hooks';
import avatarProfile from '../../assets/avatar-profile.avif';
import { formatAmount } from '../common/helpers';

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement>();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { data: userProfile } = useUserProfile();

  const { data: accountBalance } = useAccountBalance();

  const handleToggleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const target = event?.currentTarget;

    setAnchorElUser((prevState) => (prevState ? undefined : target));
  }, []);

  const handleRedirect = useCallback(
    (path: string) => {
      navigate(path);
      setAnchorElUser(undefined);
    },
    [navigate],
  );

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  const menuSettings = [
    { id: '/', label: 'Home', callback: handleRedirect },
    { id: '/my-bid-items', label: 'My Bid Items', callback: handleRedirect },
    { id: '/deposit', label: 'Deposit', callback: handleRedirect },
    { id: '/logout', label: 'Logout', callback: handleLogout },
  ];

  const formattedBalance = useMemo(() => {
    return accountBalance ? formatAmount({ value: accountBalance.amount }) : '';
  }, [accountBalance]);

  const settings = menuSettings.filter((setting) => setting.id !== pathname);

  return (
    <ProfileMenuContainer>
      <ProfileQuickInfo>
        <ProfileName>{userProfile?.email}</ProfileName>
        <AccountBalance>Balance: {formattedBalance}</AccountBalance>
      </ProfileQuickInfo>
      <IconButton onClick={handleToggleMenu} sx={{ p: 0 }}>
        <Avatar alt={userProfile?.email} src={avatarProfile} />
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
          <MenuItem key={setting.id} onClick={() => setting.callback(setting.id)}>
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

const ProfileQuickInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const AccountBalance = styled.div`
  font-size: 12px;
`;

const MenuList = styled(Menu)`
  top: 48px;

  ul {
    min-width: 200px;
  }
`;

export default ProfileMenu;
