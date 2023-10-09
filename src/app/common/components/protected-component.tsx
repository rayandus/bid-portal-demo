import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedComponent = (props: ProtectedRouteProps) => {
    const { children } = props;

    const navigate = useNavigate();

    const token = sessionStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [navigate, token])

    if (!token) {
        return null;
    }

    return (
        <>{children}</>
    );
};

export default ProtectedComponent;
