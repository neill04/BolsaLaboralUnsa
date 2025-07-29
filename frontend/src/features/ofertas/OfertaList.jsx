import React, {useEffect, useState} from "react";
import { obtenerOfertas } from "../../api/ofertaService";
import TablaOfertas from "../../components/TablaOfertas";


const OfertaList = () => {
    const [ofertas, setOfertas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarOfertas = async () => {
            try {
                const datos = await obtenerOfertas();
                setOfertas(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        cargarOfertas();
    }, []);

    const editarOferta = (id) => {
        alert(`Editar ofertacon ID: ${id}`);
    };

    const cambiarEstado = (id) => {
        setOfertas((prevOfertas) =>
            prevOfertas.map((emp) =>
                oft.id === id ? { ...oft, activa: !emp.activa } : emp
            )
        );
    };

    if (cargando) return <p className="text-center text-lg font-semibold">CARGANDO OFERTAS</p>;
    if (error) return <p className="text-red-600">ERROR: {error}</p>;

    return (
        <div className="p-6">
            {ofertas.length > 0 ? (
                <TablaOfertas
                    Ofertas={ofertas.map((o) => ({
                        ...o,
                        titulo: o.titulo,
                        empresa: o.nombre,
                        postulaciones: 0,
                        fecha: o.createdAt
                    }))}
                    onEdit={(empresa) => alert(`Editar empresa ${empresa.razonSocial}`)}
                />
            ) : (
                <p>No hay empresas registradas.</p>
            )}
        </div>
    );
};

export default OfertaList;