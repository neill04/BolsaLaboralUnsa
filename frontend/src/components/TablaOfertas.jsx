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
        <div className="overflow-x-auto">
            <table className="tabla text-center">
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
                        <td className="flex justify-center gap-2">
                            {onView && (
                                <button className="bg-yellow-400 text-black px-2 py-1 rounded flex items-center gap-1" onClick={() => onView(o)}>👁️ {viewLabel}</button>
                            )}
                            {onEdit && (
                                <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => onEdit(o)}>✏️</button>
                            )}
                            {onDelete && (
                                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(o)}>🗑️</button>
                            )}
                            {onApply && (
                                <button className="bg-yellow-400 text-black px-2 py-1 rounded shadow" onClick={() => onApply(o)}>📨</button>
                            )}
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default TablaOfertas;