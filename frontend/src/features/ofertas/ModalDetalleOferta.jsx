import React from 'react';

const ModalDetalleOferta = ({ open, onClose, oferta }) => {
    if (!open || !oferta) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>×</button>
                <h3>Detalle de Oferta</h3>
                <p><strong>Título:</strong> {oferta.titulo}</p>
                <p><strong>Descripción:</strong> {oferta.descripcion}</p>
                {oferta.detalles && <p><strong>Detalles:</strong> {oferta.detalles}</p>}
                <button className="bg-blue-500 text-white px-3 py-1 rounded mt-4" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalDetalleOferta;