import React from 'react';
import EmpresaForm from './EmpresaForm';

const ModalRegistrarEmpresa = ({ open, onClose, onSave, initialData }) => {
    if (!open) return null;

    const handleSubmit = (datos) => {
        onSave(datos);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h3>{initialData ? 'Editar Empresa' : 'Registrar Empresa'}</h3>
                <EmpresaForm
                    initialData={initialData || {}}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            </div>
        </div>
    );
};

export default ModalRegistrarEmpresa;