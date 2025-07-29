import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import VistaProfesor from './views/VistaProfesor';
import VistaEstudiante from './views/VistaEstudiante';
import VistaAdmin from './views/VistaAdmin';
import EmpresaList from './features/empresas/EmpresaList';
import OfertaList from "./features/ofertas/OfertaList";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profesor" element={<VistaProfesor />} />
                    <Route path="/estudiante" element={<VistaEstudiante />} />
                    <Route path="/admin" element={<VistaAdmin />} />
                    <Route path="/empresas" element={<EmpresaList />} />
                    <Route path="/ofertas" element={<OfertaList />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;