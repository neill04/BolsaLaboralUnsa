import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/dashboard" className="navbar-brand">Bolsa Laboral</Link>
                <input className="navbar-search" type="text" placeholder="Buscar..." />
            </div>
            <div className="navbar-user">👤</div>
        </nav>
    );
}

export default Navbar;