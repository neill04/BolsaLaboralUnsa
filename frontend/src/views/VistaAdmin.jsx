import React, { useState } from 'react';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";
import ModalRegistrarEmpresa from "../features/empresas/ModalRegistrarEmpresa";
import ModalRegistrarOferta from "../features/ofertas/ModalRegistrarOferta";
import { registrarEmpresa, actualizarEmpresa } from "../api/empresaService";
import { registrarOferta } from "../api/ofertaService";

function VistaAdmin() {
    const [tab, setTab] = useState('empresas');
    const [busqueda, setBusqueda] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOfertaOpen, setModalOfertaOpen] = useState(false);
    const [empresaEditar, setEmpresaEditar] = useState(null);

    const abrirRegistrar = () => {
        setEmpresaEditar(null);
        setModalOpen(true);
    };

    const abrirRegistrarOferta = () => {
        setModalOfertaOpen(true);
    };

    const abrirEditar = (empresa) => {
        setEmpresaEditar(empresa);
        setModalOpen(true);
    };

    const guardarEmpresa = async (datos) => {
        try {
            if (empresaEditar) {
                await actualizarEmpresa(empresaEditar.id, datos);
            } else {
                await registrarEmpresa(datos);
            }
            setModalOpen(false);
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert('Error al guardar');
        }
    };

    const guardarOferta = async (datos) => {
        try {
            await registrarOferta(datos.empresaId, datos);
            setModalOfertaOpen(false);
            window.location.reload();
        } catch (e) {
            console.error(e);
            alert('Error al guardar oferta');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Vista Administrador</h2>
                <div className="mb-4 flex gap-2 flex-wrap">
                    <button className="bg-black text-white px-4 py-2 rounded hover:shadow" onClick={() => setTab('empresas')}>GESTIÓN DE EMPRESAS</button>
                    <button className="bg-black text-white px-4 py-2 rounded hover:shadow" onClick={() => setTab('ofertas')}>GESTIÓN DE OFERTAS</button>
                    {tab === 'empresas' && (
                        <button className="bg-green-600 text-white px-3 py-2 rounded" onClick={abrirRegistrar}>+ Agregar Empresa</button>
                    )}
                    {tab === 'ofertas' && (
                        <button className="bg-green-600 text-white px-3 py-2 rounded" onClick={abrirRegistrarOferta}>+ Agregar Oferta</button>
                    )}
                </div>
                <input
                    className="border p-2 rounded mb-4 w-full max-w-sm"
                    type="text"
                    placeholder="Buscar por nombre o estado"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                {tab === 'empresas' ? (
                    <EmpresaList
                        search={busqueda}
                        onEdit={abrirEditar}
                        onDelete={(emp) => alert(`Borrar empresa ${emp.nombre || emp.razonSocial}`)}
                    />
                ) : (
                    <OfertaList
                        search={busqueda}
                        onEdit={(ofer) => alert(`Editar oferta ${ofer.titulo}`)}
                        onDelete={(ofer) => alert(`Borrar oferta ${ofer.titulo}`)}
                    />
                )}
            </div>
            <ModalRegistrarEmpresa
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={guardarEmpresa}
                initialData={empresaEditar}
            />
            <ModalRegistrarOferta
                open={modalOfertaOpen}
                onClose={() => setModalOfertaOpen(false)}
                onSave={guardarOferta}
            />
        </div>
    );
}

export default VistaAdmin;