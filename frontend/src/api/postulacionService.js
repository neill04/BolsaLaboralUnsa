const API_URL = "http://localhost:8080/api";

export const obtenerPostulantes = async (ofertaId) => {
    const respuesta = await fetch(`${API_URL}/ofertas/${ofertaId}/postulantes`);
    if (!respuesta.ok) throw new Error('Error al obtener postulantes');
    return await respuesta.json();
};

export const registrarPostulacion = async (ofertaId, datos) => {
    const respuesta = await fetch(`${API_URL}/ofertas/${ofertaId}/postulaciones`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    if (!respuesta.ok) throw new Error('Error al registrar postulacion');
    return await respuesta.json();
};