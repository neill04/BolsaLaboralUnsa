import React, { useEffect, useState } from 'react';

const EmpresaForm = ({ initialData, onSubmit, onCancel }) => {
    const [ruc, setRuc] = useState('');
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        const data = initialData || {};
        setRuc(data.ruc || '');
        setNombre(data.nombre || '');
        setTelefono(data.datosContacto?.telefono || '');
        setDireccion(data.datosContacto?.direccion || '');
        setEmail(data.datosContacto?.email || '');
        setDescripcion(data.descripcion || '');
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ruc,
            nombre,
            descripcion,
            datosContacto: { telefono, direccion, email },
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
            <input
                type="text"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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