import React, { useEffect, useState } from 'react';
import TablaOfertas from '../components/TablaOfertas';
import EmpresaList from "../features/empresas/EmpresaList";

function VistaAdmin() {
    const [tab, setTab] = useState('empresas');
    const [empresas, setEmpresas] = useState([]);
    const [ofertas, setOfertas] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        fetch('/api/empresas')
            .then((r) => r.json())
            .then(setEmpresas)
            .catch(() => {});
        fetch('/api/ofertas')
            .then((r) => r.json())
            .then(setOfertas)
            .catch(() => {});
    }, []);

    const filtradasEmpresas = empresas.filter((e) =>
        e.razonSocial?.toLowerCase().includes(busqueda.toLowerCase())
    );

    const filtradasOfertas = ofertas.filter((o) =>
        o.titulo?.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2>Vista Administrador</h2>
            <div>
                <button onClick={() => setTab('empresas')}>Gestión de Empresas</button>
                <button onClick={() => setTab('ofertas')}>Gestión de Ofertas</button>
                <button style={{ background: 'green', color: 'white' }}>+ Agregar</button>
            </div>
            <input
                type="text"
                placeholder="Buscar por nombre o estado"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            {tab === 'empresas' ? (
                <EmpresaList empresas={empresas} />
            ) : (
                <TablaOfertas ofertas={filtradasOfertas} onView={() => {}} />
            )}
        </div>
    );
}

export default VistaAdmin;