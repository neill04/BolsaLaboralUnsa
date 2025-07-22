import React, { useState } from 'react';
import '../css/Filtros.css';

function Filtros({ onFilter }) {
    const [carrera, setCarrera] = useState('');
    const [inicio, setInicio] = useState('');
    const [fin, setFin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter({ carrera, inicio, fin });
    };

    return (
        <form className="filtros" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Carrera"
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
            />
            <input
                type="date"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
            />
            <input
                type="date"
                value={fin}
                onChange={(e) => setFin(e.target.value)}
            />
            <button type="submit">Filtrar</button>
        </form>
    );
}

export default Filtros;