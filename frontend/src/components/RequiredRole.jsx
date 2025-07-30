import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const RequireRole = ({ role, children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to="/" replace />;
    try {
        const payload = jwtDecode(token);
        if (payload.role !== role) {
            return <Navigate to="/" replace />;
        }
        return children;
    } catch (e) {
        return <Navigate to="/" replace />;
    }
};

export default RequireRole;