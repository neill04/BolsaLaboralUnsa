import React, { useState } from 'react';
import OfertaList from "../features/ofertas/OfertaList";
import Filtros from '../components/Filtros';

function VistaEstudiante() {
    const [filtro, setFiltro] = useState({});
    const [cv, setCv] = useState(null);
    const [file, setFile] = useState(null);

    const handleFilter = (f) => {
        setFiltro(f);
    };

    const handleUpload = () => {
        if (!file) return;
        console.log('Upload', file);
        setCv(file.name);
    };

    return (
        <div>
            <h2>Vista Estudiante</h2>
            <Filtros onFilter={handleFilter} />
            <OfertaList
                filter={filtro}
                onView={(oferta) => alert(`Detalles de ${oferta.titulo}`)}
                onApply={(oferta) => alert(`Postular a ${oferta.titulo}`)}
                viewLabel="Ver más detalles"
            />
            <h3>Mi CV</h3>
            {cv ? <p>Archivo subido: {cv}</p> : <p>No has subido un CV</p>}
            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={handleUpload}>Subir</button>
        </div>
    );
}

export default VistaEstudiante;