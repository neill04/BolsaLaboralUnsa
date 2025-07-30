const API_URL = "http://localhost:8080/api";

export const obtenerPostulantes = async (ofertaId) => {
    const respuesta = await fetch(`${API_URL}/ofertas/${ofertaId}/postulantes`);
    if (!respuesta.ok) throw new Error('Error al obtener postulantes');
    return await respuesta.json();
};