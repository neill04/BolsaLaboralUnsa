import React, { useState } from 'react';
import EmpresaList from "../features/empresas/EmpresaList";
import OfertaList from "../features/ofertas/OfertaList";
import ModalRegistrarEmpresa from "../features/empresas/ModalRegistrarEmpresa";
import ModalRegistrarOferta from "../features/ofertas/ModalRegistrarOferta";
import { registrarEmpresa, actualizarEmpresa } from "../api/empresaService";
import { registrarOferta } from "../api/ofertaService";
import '../css/Admin.css';

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
                <div className="top-bar">
                    <button className={`top-button ${tab === 'empresas' ? 'active' : 'inactive'}`} onClick={() => setTab('empresas')}>GESTIÓN DE EMPRESAS</button>
                    <button className={`top-button ${tab === 'ofertas' ? 'active' : 'inactive'}`} onClick={() => setTab('ofertas')}>GESTIÓN DE OFERTAS</button>
                    {tab === 'empresas' && (
                        <button className="btn-add" onClick={abrirRegistrar}>+ Agregar Empresa</button>
                    )}
                    {tab === 'ofertas' && (
                        <button className="btn-add" onClick={abrirRegistrarOferta}>+ Agregar Oferta</button>
                    )}
                </div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Buscar por nombre o estado"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                {mostrarFormulario && (
                    <div style={{ border: '1px solid gray', padding: 10, marginTop: 10 }}>
                        <h3>Nueva Oferta</h3>
                        <input
                            type="text"
                            placeholder="Título"
                            value={nuevaOferta.titulo}
                            onChange={(e) =>
                                setNuevaOferta({ ...nuevaOferta, titulo: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Empresa"
                            value={nuevaOferta.empresa}
                            onChange={(e) =>
                                setNuevaOferta({ ...nuevaOferta, empresa: e.target.value })
                            }
                        />
                        <input
                            type="date"
                            placeholder="Fecha"
                            value={nuevaOferta.fecha}
                            onChange={(e) =>
                                setNuevaOferta({ ...nuevaOferta, fecha: e.target.value })
                            }
                        />
                        <button onClick={agregarOferta}>Guardar</button>
                        <button onClick={() => setMostrarFormulario(false)}>Cancelar</button>
                    </div>
                    )}
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
