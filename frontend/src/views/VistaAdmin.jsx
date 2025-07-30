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
        <div>
            <h2>Vista Administrador</h2>
            <div>
                <button onClick={() => setTab('empresas')}>Gestión de Empresas</button>
                <button onClick={() => setTab('ofertas')}>Gestión de Ofertas</button>
                {tab === 'empresas' && (
                    <button style={{ background: 'green', color: 'white' }} onClick={abrirRegistrar}>+ Agregar Empresa</button>
                )}
                {tab === 'ofertas' && (
                    <button style={{ background: 'green', color: 'white' }} onClick={abrirRegistrarOferta}>+ Agregar Oferta</button>
                )}
            </div>
            <input
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