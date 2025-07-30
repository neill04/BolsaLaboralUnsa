const API_URL = "http://localhost:8080/api/ofertas";

export const obtenerOfertas = async () => {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener las ofertas");
    return await respuesta.json();
};

export const registrarOferta = async (empresaId, datos) => {
    const respuesta = await fetch(`${API_URL}/${empresaId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    if (!respuesta.ok) throw new Error('Error al registrar oferta');
    return await respuesta.json();
};