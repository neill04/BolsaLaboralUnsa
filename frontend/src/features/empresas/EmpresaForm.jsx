import React, { useEffect, useState } from 'react';

const EmpresaForm = ({ initialData = {}, onSubmit, onCancel }) => {
    const [ruc, setRuc] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        setRuc(initialData.ruc || '');
        setNombre(initialData.nombre || '');
        setTelefono(initialData.datosContacto?.telefono || '');
        setDescripcion(initialData.descripcion || '');
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ruc,
            nombre,
            descripcion,
            datosContacto: { telefono },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="empresa-form">
            <input
                type="text"
                placeholder="RUC"
                value={ruc}
                onChange={(e) => setRuc(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <div className="form-buttons">
                <button type="submit">Guardar</button>
                {onCancel && (
                    <button type="button" onClick={onCancel} className="cancel-btn">Cancelar</button>
                )}
            </div>
        </form>
    );
};

export default EmpresaForm;