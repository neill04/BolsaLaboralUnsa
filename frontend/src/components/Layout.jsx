import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
