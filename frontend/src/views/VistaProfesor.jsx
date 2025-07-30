import React, { useState } from 'react';
import Filtros from '../components/Filtros';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";
import ModalPostulantes from "../features/ofertas/ModalPostulantes";
import ModalDetalleEmpresa from "../features/empresas/ModalDetalleEmpresa";
import '../css/Admin.css';

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
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Vista Profesor</h2>
                <div className="mb-4 flex gap-2">
                    <button className={`top-button ${tab === 'ofertas' ? 'active' : 'inactive'}`} onClick={() => setTab('ofertas')}>Ofertas</button>
                    <button className={`top-button ${tab === 'empresas' ? 'active' : 'inactive'}`} onClick={() => setTab('empresas')}>Empresas</button>
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
            </div>
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