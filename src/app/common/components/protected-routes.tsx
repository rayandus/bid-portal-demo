import React, { useEffect } from 'react';
import { Routes, RoutesProps, useNavigate } from 'react-router-dom';

interface ProtectedRouteProps extends RoutesProps {}

const ProtectedRoutes = (props: ProtectedRouteProps) => {
    const { ...routeProps } = props;

    const navigate = useNavigate();

    navigate('/login');

    return (
        <Routes {...routeProps} />
    );
};

export default ProtectedRoutes;
