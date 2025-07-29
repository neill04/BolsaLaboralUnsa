import React, { useState } from 'react';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";

function VistaAdmin() {
    const [tab, setTab] = useState('empresas');
    const [busqueda, setBusqueda] = useState('');

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
                <EmpresaList
                    search={busqueda}
                    onEdit={(emp) => alert(`Editar empresa ${emp.nombre || emp.razonSocial}`)}
                    onDelete={(emp) => alert(`Borrar empresa ${emp.nombre || emp.razonSocial}`)}
                />
            ) : (
                <OfertaList
                    search={busqueda}
                    onEdit={(ofer) => alert(`Editar oferta ${ofer.titulo}`)}
                    onDelete={(ofer) => alert(`Borrar oferta ${ofer.titulo}`)}
                />
            )}
        </div>
    );
}

export default VistaAdmin;