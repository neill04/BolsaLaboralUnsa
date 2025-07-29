import React, { useEffect, useState } from 'react';
import OfertaList from "../features/ofertas/OfertaList";
import Filtros from '../components/Filtros';

function VistaEstudiante() {
    const [ofertas, setOfertas] = useState([]);
    const [cv, setCv] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetch('/api/ofertas')
            .then((r) => r.json())
            .then(setOfertas)
            .catch(() => {});
    }, []);

    const handleFilter = (f) => {
        console.log('Filtrar', f);
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
            <OfertaList ofertas={ofertas} />
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