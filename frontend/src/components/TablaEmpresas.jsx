import React from 'react';
import '../css/Tabla.css';

function TablaEmpresas({ empresas = [], onEdit, onDelete, onView, viewLabel = 'Ver' }) {
    const getTelefono = (e) => e.celular || e.datosContacto?.telefono || '-';
    const getNombre = (e) => e.razonSocial || e.nombre;
    const getTipo = (e) => e.tipo || e.descripcion;
    const getTotalOfertas = (e) => e.totalOfertas ?? (e.ofertas ? e.ofertas.length : 0);
    return (
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
                        <td>
                            {onView && (
                                <button onClick={() => onView(e)}>{viewLabel}</button>
                            )}
                            {onEdit && (
                                <button onClick={() => onEdit(e)}>Editar</button>
                            )}
                            {onDelete && (
                                <button onClick={() => onDelete(e)}>Borrar</button>
                            )}
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TablaEmpresas;