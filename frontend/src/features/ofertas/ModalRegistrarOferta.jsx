import React from 'react';
import OfertaForm from './OfertaForm';

const ModalRegistrarOferta = ({ open, onClose, onSave, initialData }) => {
    if (!open) return null;

    const handleSubmit = (datos) => {
        onSave(datos);
    };

    return (
        <div className="modal-backdrop">
            <button className="modal-close" onClick={onClose}>×</button>
            <div className="modal">
                <h3>{initialData ? 'Editar Oferta' : 'Registrar Oferta'}</h3>
                <OfertaForm
                    initialData={initialData || {}}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            </div>
        </div>
    );
};

export default ModalRegistrarOferta;