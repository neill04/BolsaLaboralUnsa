import React from 'react';

const ModalDetalleOferta = ({ open, onClose, oferta }) => {
    if (!open || !oferta) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>Detalle de Oferta</h3>
                <p><strong>Título:</strong> {oferta.titulo}</p>
                <p><strong>Descripción:</strong> {oferta.descripcion}</p>
                {oferta.detalles && <p><strong>Detalles:</strong> {oferta.detalles}</p>}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalDetalleOferta;