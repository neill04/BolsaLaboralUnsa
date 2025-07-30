import React, {useEffect, useState} from "react";
import { obtenerEmpresas } from "../../api/empresaService";
import TablaEmpresas from "../../components/TablaEmpresas";


const EmpresaList = ({
                         search = '',
                         filter = {},
                         onEdit,
                         onDelete,
                         onView,
                         viewLabel = 'Ver',
                     }) => {
    const [empresas, setEmpresas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarEmpresas = async () => {
            try {
                const datos = await obtenerEmpresas();
                setEmpresas(datos);
            } catch (err) {
                setError(err.message);
            } finally {
                setCargando(false);
            }
        };

        cargarEmpresas();
    }, []);

    const editarEmpresa = (id) => {
        alert(`Editar empresa con ID: ${id}`);
    };

    const cambiarEstado = (id) => {
        setEmpresas((prevEmpresas) =>
            prevEmpresas.map((emp) =>
                emp.id === id ? { ...emp, activa: !emp.activa } : emp
            )
        );
    };

    const empresasFiltradas = empresas.filter((e) => {
        const nombre = e.nombre || e.razonSocial || '';
        const searchOk = !search || nombre.toLowerCase().includes(search.toLowerCase());
        const carreraOk = !filter.carrera || nombre.toLowerCase().includes(filter.carrera.toLowerCase());
        return searchOk && carreraOk;
    });

    if (cargando) return <p className="text-center text-lg font-semibold">CARGANDO EMPRESAS</p>;
    if (error) return <p className="text-red-600">ERROR: {error}</p>;

    return (
        <div className="p-6">
            {empresasFiltradas.length > 0 ? (
                <TablaEmpresas
                    empresas={empresasFiltradas.map((e) => ({
                        ...e,
                        razonSocial: e.nombre,
                        tipo: e.descripcion,
                        celular: e.datosContacto?.telefono || "-",
                        totalOfertas: e.ofertas ? e.ofertas.length : e.totalOfertas || 0,
                    }))}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onView={onView}
                    viewLabel={viewLabel}
                />
            ) : (
                <p>No hay empresas registradas.</p>
            )}
        </div>
    );
};

export default EmpresaList;