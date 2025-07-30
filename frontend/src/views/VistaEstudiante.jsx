import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OfertaList from "../features/ofertas/OfertaList";
import Filtros from '../components/Filtros';
import ModalDetalleOferta from "../features/ofertas/ModalDetalleOferta";
import { registrarPostulacion } from '../api/postulacionService';

function VistaEstudiante() {
    const [filtro, setFiltro] = useState({});
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [ofertaSeleccionada, setOfertaSeleccionada] = useState(null);

    const handleFilter = (f) => {
        setFiltro(f);
    };

    const postular = async (oferta) => {
        try {
            await registrarPostulacion(oferta.id, {});
            alert('Postulación enviada');
        } catch (e) {
            console.error(e);
            alert('Error al postular');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Vista Estudiante</h2>
                <Filtros onFilter={handleFilter} />
                <OfertaList
                    filter={filtro}
                    onView={(oferta) => {
                        setOfertaSeleccionada(oferta);
                        setMostrarDetalle(true);
                    }}
                    onApply={postular}
                    viewLabel="Ver más detalles"
                />
                <ModalDetalleOferta
                    open={mostrarDetalle}
                    oferta={ofertaSeleccionada}
                    onClose={() => setMostrarDetalle(false)}
                />
                <Link to="/estudiante/cv" className="text-blue-600 underline block mt-4">Gestionar mi CV</Link>
            </div>
        </div>
    );
}

export default VistaEstudiante;