import React, { useState } from 'react';
import Filtros from '../components/Filtros';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";
import ModalPostulantes from "../features/ofertas/ModalPostulantes";
import ModalDetalleEmpresa from "../features/empresas/ModalDetalleEmpresa";

function VistaProfesor() {
    const [tab, setTab] = useState('ofertas');
    const [filtro, setFiltro] = useState({});
    const [mostrarPostulantes, setMostrarPostulantes] = useState(false);
    const [ofertaSeleccionada, setOfertaSeleccionada] = useState(null);
    const [mostrarEmpresa, setMostrarEmpresa] = useState(false);
    const [empresaSeleccionada, setEmpresaSeleccionada] = useState(null);

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
                    onView={(oferta) => {
                        setOfertaSeleccionada(oferta);
                        setMostrarPostulantes(true);
                    }}
                    viewLabel="Ver postulantes"
                />
            ) : (
                <EmpresaList
                    filter={filtro}
                    onView={(emp) => {
                        setEmpresaSeleccionada(emp);
                        setMostrarEmpresa(true);
                    }}
                    viewLabel="Detalles"
                />
            )}
            <ModalPostulantes
                open={mostrarPostulantes}
                onClose={() => setMostrarPostulantes(false)}
                ofertaId={ofertaSeleccionada?.id}
            />
            <ModalDetalleEmpresa
                open={mostrarEmpresa}
                onClose={() => setMostrarEmpresa(false)}
                empresa={empresaSeleccionada}
            />
        </div>
    );
}

export default VistaProfesor;