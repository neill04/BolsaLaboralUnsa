import React, { useState, useEffect } from 'react';
import '../css/CV.css';

function VistaCV() {
    const [cv, setCv] = useState(localStorage.getItem('cvName'));
    const [file, setFile] = useState(null);

    const handleUpload = () => {
        if (!file) return;
        localStorage.setItem('cvName', file.name);
        setCv(file.name);
    };

    return (
        <div className="cv-container">
            <div className="cv-card">
                <h2>Mi CV</h2>
                {cv ? (
                    <p className="cv-status">Archivo subido: {cv}</p>
                ) : (
                    <p className="cv-status">No has subido un CV</p>
                )}
                <input
                    className="cv-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="cv-button" onClick={handleUpload}>
                    📤 <span>Subir</span>
                </button>
            </div>
        </div>
    );
}

export default VistaCV;