import React, { useState } from 'react';
import Filtros from '../components/Filtros';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";
function VistaProfesor() {
    const [tab, setTab] = useState('ofertas');
    const [filtro, setFiltro] = useState({});

    const handleFilter = (f) => {
        setFiltro(f);
    };

    return (
        <div>
            <h2>Vista Profesor</h2>
            <div>
                <button onClick={() => setTab('ofertas')}>Ofertas</button>
                <button onClick={() => setTab('empresas')}>Empresas</button>
            </div>
            <Filtros onFilter={handleFilter} />
            {tab === 'ofertas' ? (
                <OfertaList
                    filter={filtro}
                    onView={(oferta) => alert(`Ver postulantes de ${oferta.titulo}`)}
                    viewLabel="Ver postulantes"
                />
            ) : (
                <EmpresaList
                    filter={filtro}
                    onView={(emp) => alert(`Consultar ${emp.nombre}`)}
                    viewLabel="Detalles"
                />
            )}
        </div>
    );
}

export default VistaProfesor;