import React, {useEffect, useState} from "react";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'; // para que salga en español
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
        prevOfertas.map((oferta) =>
            oferta.id === id ? { ...oferta, activa: !oferta.activa } : oferta
        )
    );
    };

    if (cargando) return <p className="text-center text-lg font-semibold">CARGANDO OFERTAS</p>;
    if (error) return <p className="text-red-600">ERROR: {error}</p>;

    return (
        <div className="p-6">
            {ofertas.length > 0 ? (
                <TablaOfertas
                    ofertas={ofertas.map((o) => ({
                        ...o,
                        titulo: o.titulo,
                        empresa: o.empresa.nombre,
                        postulaciones: 1,
                        fecha: formatDistanceToNow(new Date(o.fechaPublicacion), { addSuffix: true, locale: es }),
                    }))}
                    onView={(oferta) => alert(`Ver postulantes de ${oferta.titulo}`)}
                />
            ) : (
                <p>No hay empresas registradas.</p>
            )}
        </div>
    );
};

export default OfertaList;