import React, { useEffect, useState } from 'react';
import { obtenerPostulantes } from '../../api/postulacionService';

const ModalPostulantes = ({ open, onClose, ofertaId }) => {
    const [postulantes, setPostulantes] = useState([]);
    useEffect(() => {
        if (!open) return;
        const cargar = async () => {
            try {
                const datos = await obtenerPostulantes(ofertaId);
                setPostulantes(datos);
            } catch (e) {
                console.error(e);
                setPostulantes([]);
            }
        };
        cargar();
    }, [open, ofertaId]);

    if (!open) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>×</button>
                <h3>Postulantes</h3>
                {postulantes.length > 0 ? (
                    <ul>
                        {postulantes.map((p) => (
                            <li key={p.id}>{p.nombre}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay postulantes</p>
                )}
                <button className="bg-blue-500 text-white px-3 py-1 rounded mt-4" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalPostulantes;