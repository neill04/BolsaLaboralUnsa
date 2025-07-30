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
        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
            <div className="bg-white p-6 rounded shadow w-full max-w-md text-center">
                <h2 className="text-xl font-bold mb-4">Mi CV</h2>
                {cv ? (
                    <p className="mb-4 bg-yellow-100 p-2 rounded">Archivo subido: {cv}</p>
                ) : (
                    <p className="mb-4 bg-yellow-100 p-2 rounded">No has subido un CV</p>
                )}
                <input
                    className="border p-2 rounded w-full mb-4"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button className="bg-green-600 text-white font-bold px-4 py-2 rounded flex items-center justify-center gap-2" onClick={handleUpload}>
                    📤 <span>Subir</span>
                </button>
            </div>
        </div>
    );
}

export default VistaCV;