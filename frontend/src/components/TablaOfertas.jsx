import React from 'react';
import '../css/Tabla.css';

function TablaOfertas({ ofertas = [], onView }) {
    return (
        <table className="tabla">
            <thead>
            <tr>
                <th>Título</th>
                <th>Empresa</th>
                <th>Postulaciones</th>
                <th>Fecha</th>
                {onView && <th>Acciones</th>}
            </tr>
            </thead>
            <tbody>
            {ofertas.map((o) => (
                <tr key={o.id}>
                    <td>{o.titulo}</td>
                    <td>{o.empresa}</td>
                    <td>{o.postulaciones || 0}</td>
                    <td>{o.fecha}</td>
                    {onView && (
                        <td>
                            <button onClick={() => onView(o)}>Ver postulantes</button>
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TablaOfertas;