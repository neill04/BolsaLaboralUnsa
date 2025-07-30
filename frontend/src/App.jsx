import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import VistaProfesor from './views/VistaProfesor';
import VistaEstudiante from './views/VistaEstudiante';
import VistaCV from './views/VistaCV';
import VistaAdmin from './views/VistaAdmin';
import EmpresaList from './features/empresas/EmpresaList';
import OfertaList from "./features/ofertas/OfertaList";
import Layout from "./components/Layout";
import RequireRole from './components/RequiredRole';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profesor" element={
                        <RequireRole role="PROFESOR">
                            <VistaProfesor />
                        </RequireRole>
                    } />
                    <Route path="/estudiante" element={
                        <RequireRole role="ESTUDIANTE">
                            <VistaEstudiante />
                        </RequireRole>
                    } />
                    <Route path="/estudiante/cv" element={
                        <RequireRole role="ESTUDIANTE">
                            <VistaCV />
                        </RequireRole>
                    } />
                    <Route path="/admin" element={
                        <RequireRole role="ADMIN">
                            <VistaAdmin />
                        </RequireRole>
                    } />
                    <Route path="/empresas" element={<EmpresaList />} />
                    <Route path="/ofertas" element={<OfertaList />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;