import React, {useEffect, useState} from "react";
import { obtenerEmpresas } from "../../api/empresaService";
//import ModalRegistrarEmpresa from "./components/ModalRegistrarEmpresa";

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
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Empresas</h2>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
                    <tr>
                        <th className="py-3 px-6 text-left">Nro</th>
                        <th className="py-3 px-6 text-left">Ruc</th>
                        <th className="py-3 px-6 text-left">Razón social</th>
                        <th className="py-3 px-6 text-left"></th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-700 text-sm">
                    {empresas.map((empresa, index) => (
                        <tr key={empresa.id} className="border-b hover:bg-gray-100">
                            <td className="py-3 px-6">{index + 1}</td>
                            <td className="py-3 px-6 font-medium">{empresa.ruc}</td>
                            <td className="py-3 px-6">{empresa.nombre}</td>
                            <td className="py-2 px-4 border-b space-x-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                                    onClick={() => alert(`Editar empresa ${empresa.nombre}`)}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EmpresaList;