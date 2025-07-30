const API_URL = "http://localhost:8080/api/empresas";

// Para obtener todas las empresas
export const obtenerEmpresas = async () => {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener las empresas");
    return await respuesta.json();
};

export const obtenerEmpresa = async (id) => {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (!respuesta.ok) throw new Error('Error al obtener la empresa');
    return await respuesta.json();
};

// Registrar una empresa
export const registrarEmpresa = async (datos) => {
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    });
    if (!respuesta.ok) throw new Error("Error al registrar empresa");
    return await respuesta.json();
};

// Actualizar una empresa
export const actualizarEmpresa = async (id, datos) => {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    });
    if (!respuesta.ok) throw new Error("Error al actualizar la empresa");
    return await respuesta.json();
};