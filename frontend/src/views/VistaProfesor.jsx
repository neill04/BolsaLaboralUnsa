import React, { useEffect, useState } from 'react';
import TablaOfertas from '../components/TablaOfertas';
import TablaEmpresas from '../components/TablaEmpresas';
import Filtros from '../components/Filtros';

function VistaProfesor() {
    const [tab, setTab] = useState('ofertas');
    const [ofertas, setOfertas] = useState([]);
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        if (tab === 'ofertas') {
            fetch('/api/ofertas')
                .then((r) => r.json())
                .then(setOfertas)
                .catch(() => {});
        } else {
            fetch('/api/empresas')
                .then((r) => r.json())
                .then(setEmpresas)
                .catch(() => {});
        }
    }, [tab]);

    const handleFilter = (f) => {
        console.log('Filtrar', f);
    };

    return (
        <div>
            <h2>Vista Profesor</h2>
            <div>
                <button onClick={() => setTab('ofertas')}>Ofertas</button>
                <button onClick={() => setTab('empresas')}>Empresas</button>
            </div>
            <Filtros onFilter={handleFilter} />
            {tab === 'ofertas' ? (
                <TablaOfertas ofertas={ofertas} onView={(o) => console.log(o)} />
            ) : (
                <TablaEmpresas empresas={empresas} />
            )}
            <div className="paginacion">Paginación aquí</div>
        </div>
    );
}

export default VistaProfesor;