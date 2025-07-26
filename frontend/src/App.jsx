import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import VistaProfesor from './views/VistaProfesor';
import VistaEstudiante from './views/VistaEstudiante';
import VistaAdmin from './views/VistaAdmin';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profesor" element={<VistaProfesor />} />
                <Route path="/estudiante" element={<VistaEstudiante />} />
                <Route path="/admin" element={<VistaAdmin />} />
            </Routes>
        </Router>
    );
}

export default App;