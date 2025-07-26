import React from 'react';
import '../css/Tabla.css';

function TablaEmpresas({ empresas = [], onEdit, onDelete }) {
    return (
        <table className="tabla">
            <thead>
            <tr>
                <th>RUC</th>
                <th>Razón Social</th>
                <th>Tipo</th>
                <th>Celular</th>
                <th>Total Ofertas</th>
                {(onEdit || onDelete) && <th>Acciones</th>}
            </tr>
            </thead>
            <tbody>
            {empresas.map((e) => (
                <tr key={e.id}>
                    <td>{e.ruc}</td>
                    <td>{e.razonSocial}</td>
                    <td>{e.tipo}</td>
                    <td>{e.celular}</td>
                    <td>{e.totalOfertas || 0}</td>
                    {(onEdit || onDelete) && (
                        <td>
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