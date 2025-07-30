import React, { useState, useEffect } from 'react';

function VistaCV() {
    const [cv, setCv] = useState(localStorage.getItem('cvName'));
    const [file, setFile] = useState(null);

    const handleUpload = () => {
        if (!file) return;
        localStorage.setItem('cvName', file.name);
        setCv(file.name);
    };

    return (
        <div>
            <h2>Mi CV</h2>
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

export default VistaCV;