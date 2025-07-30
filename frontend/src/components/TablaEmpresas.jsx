import React from 'react';
import '../css/Tabla.css';
import '../css/Admin.css';

function TablaEmpresas({ empresas = [], onEdit, onDelete, onView, viewLabel = 'Ver' }) {
    const getTelefono = (e) => e.celular || e.datosContacto?.telefono || '-';
    const getNombre = (e) => e.razonSocial || e.nombre;
    const getTipo = (e) => e.tipo || e.descripcion;
    const getTotalOfertas = (e) => e.totalOfertas ?? (e.ofertas ? e.ofertas.length : 0);
    return (
        <div className="overflow-x-auto">
        <table className="tabla">
            <thead>
            <tr>
                <th>RUC</th>
                <th>Razón Social</th>
                <th>Tipo</th>
                <th>Celular</th>
                <th>Total Ofertas</th>
                {(onEdit || onDelete || onView) && <th>Acciones</th>}
            </tr>
            </thead>
            <tbody>
            {empresas.map((e) => (
                <tr key={e.id || e.ruc}>
                    <td>{e.ruc}</td>
                    <td>{getNombre(e)}</td>
                    <td>{getTipo(e)}</td>
                    <td>{getTelefono(e)}</td>
                    <td>{getTotalOfertas(e)}</td>
                    {(onEdit || onDelete || onView) && (
                        <td className="flex gap-2">
                            {onView && (
                                <button className="bg-yellow-400 text-black px-2 py-1 rounded flex items-center gap-1" onClick={() => onView(e)}>👁️ {viewLabel}</button>
                            )}
                            {onEdit && (
                                <button className="btn-icon edit" onClick={() => onEdit(e)}>✏️</button>
                            )}
                            {onDelete && (
                                <button className="btn-icon" onClick={() => onDelete(e)}>🗑️</button>
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

export default TablaEmpresas;