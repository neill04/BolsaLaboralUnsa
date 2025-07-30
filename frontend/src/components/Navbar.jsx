import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/dashboard" className="navbar-brand">Bolsa Laboral</Link>
            </div>
            <div className="navbar-user">
                👤
                <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </nav>
    );
}

export default Navbar;