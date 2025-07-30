import React from 'react';

const ModalDetalleEmpresa = ({ open, onClose, empresa }) => {
    if (!open || !empresa) return null;

    const { ruc, nombre, descripcion, datosContacto } = empresa;
    const { telefono, direccion, email } = datosContacto || {};

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>×</button>
                <h3>Detalle de Empresa</h3>
                <p><strong>RUC:</strong> {ruc}</p>
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Teléfono:</strong> {telefono || '-'}</p>
                <p><strong>Dirección:</strong> {direccion || '-'}</p>
                <p><strong>Email:</strong> {email || '-'}</p>
                <p><strong>Descripción:</strong> {descripcion || '-'}</p>
                <button className="bg-blue-500 text-white px-3 py-1 rounded mt-4" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalDetalleEmpresa;