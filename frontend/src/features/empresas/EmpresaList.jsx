import React, {useEffect, useState} from "react";
import { obtenerEmpresas } from "../../api/empresaService";
import TablaEmpresas from "../../components/TablaEmpresas";


const EmpresaList = () => {
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

    if (cargando) return <p className="text-center text-lg font-semibold">CARGANDO EMPRESAS</p>;
    if (error) return <p className="text-red-600">ERROR: {error}</p>;

    return (
        <div className="p-6">
            {empresas.length > 0 ? (
                <TablaEmpresas
                    empresas={empresas.map((e) => ({
                        ...e,
                        razonSocial: e.nombre,
                        tipo: e.descripcion,
                        celular: e.datosContacto?.telefono || "-",
                        totalOfertas: 0
                    }))}
                    onEdit={(empresa) => alert(`Editar empresa ${empresa.razonSocial}`)}
                />
            ) : (
                <p>No hay empresas registradas.</p>
            )}
        </div>
    );
};

export default EmpresaList;