import React, { useState, useEffect } from 'react';

const OfertaForm = ({ initialData = {}, onSubmit, onCancel }) => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [empresaId, setEmpresaId] = useState('');

    useEffect(() => {
        setTitulo(initialData.titulo || '');
        setDescripcion(initialData.descripcion || '');
        setEmpresaId(initialData.empresaId || '');
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ titulo, descripcion, empresaId });
    };

    return (
        <form onSubmit={handleSubmit} className="empresa-form">
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <input
                type="text"
                placeholder="Empresa ID"
                value={empresaId}
                onChange={(e) => setEmpresaId(e.target.value)}
                required
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

export default OfertaForm;