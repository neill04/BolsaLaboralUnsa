import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const location = useLocation();
    const showNavbar = location.pathname !== '/';
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {showNavbar && <Navbar />}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
