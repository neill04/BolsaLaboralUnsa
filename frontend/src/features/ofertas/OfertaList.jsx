import React, {useEffect, useState} from "react";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'; // para que salga en español
import { obtenerOfertas } from "../../api/ofertaService";
import TablaOfertas from "../../components/TablaOfertas";


const OfertaList = ({
                        search = '',
                        filter = {},
                        onEdit,
                        onDelete,
                        onView,
                        onApply,
                        viewLabel = 'Ver',
                    }) => {
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

    const ofertasFiltradas = ofertas.filter((o) => {
        const titulo = o.titulo || '';
        const searchOk = !search || titulo.toLowerCase().includes(search.toLowerCase());
        const carreraOk = !filter.carrera || titulo.toLowerCase().includes(filter.carrera.toLowerCase());
        const inicioOk = !filter.inicio || new Date(o.fechaPublicacion) >= new Date(filter.inicio);
        const finOk = !filter.fin || new Date(o.fechaPublicacion) <= new Date(filter.fin);
        return searchOk && carreraOk && inicioOk && finOk;
    });

    if (cargando) return <p className="text-center text-lg font-semibold">CARGANDO OFERTAS</p>;
    if (error) return <p className="text-red-600">ERROR: {error}</p>;

    return (
        <div className="p-6">
            {ofertasFiltradas.length > 0 ? (
                <TablaOfertas
                    ofertas={ofertasFiltradas.map((o) => ({
                        ...o,
                        titulo: o.titulo,
                        empresa: o.empresa.nombre,
                        postulaciones: 1,
                        fecha:o.fechaPublicacion,
                    }))}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                    onApply={onApply}
                    viewLabel={viewLabel}
                />
            ) : (
                <p>No hay empresas registradas.</p>
            )}
        </div>
    );
};

export default OfertaList;