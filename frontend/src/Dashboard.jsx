import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li><Link to="/profesor">Vista Profesor</Link></li>
                <li><Link to="/estudiante">Vista Estudiante</Link></li>
                <li><Link to="/admin">Vista Admin</Link></li>
            </ul>
        </div>
    );
}

export default Dashboard;