import React from 'react';
import '../css/Tabla.css';

function TablaOfertas({ ofertas = [], onView, onEdit, onDelete, onApply, viewLabel = 'Ver' }) {
    const formatFecha = (f) => {
        if (!f) return '';
        const date = typeof f === 'string' ? new Date(f) : f;
        return date.toLocaleDateString();
    };

    const getEmpresa = (o) => (typeof o.empresa === 'string' ? o.empresa : o.empresa?.nombre);
    const getPostulaciones = (o) => o.postulaciones ?? o.postulacionesCount ?? (o.postulacionesList ? o.postulacionesList.length : 0);

    return (
        <table className="tabla">
            <thead>
            <tr>
                <th>Título</th>
                <th>Empresa</th>
                <th>Postulaciones</th>
                <th>Fecha</th>
                {(onView || onEdit || onDelete || onApply) && <th>Acciones</th>}
            </tr>
            </thead>
            <tbody>
            {ofertas.map((o) => (
                <tr key={o.id}>
                    <td>{o.titulo}</td>
                    <td>{getEmpresa(o)}</td>
                    <td>{getPostulaciones(o)}</td>
                    <td>{formatFecha(o.fecha || o.fechaPublicacion)}</td>
                    {(onView || onEdit || onDelete || onApply) && (
                        <td>
                            {onView && (
                                <button onClick={() => onView(o)}>{viewLabel}</button>
                            )}
                            {onEdit && (
                                <button onClick={() => onEdit(o)}>Editar</button>
                            )}
                            {onDelete && (
                                <button onClick={() => onDelete(o)}>Borrar</button>
                            )}
                            {onApply && (
                                <button onClick={() => onApply(o)}>Postular</button>
                            )}
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TablaOfertas;