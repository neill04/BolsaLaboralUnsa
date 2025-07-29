const API_URL = "http://localhost:8080/api/ofertas";

export const obtenerOfertas = async () => {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error("Error al obtener las ofertas");
    return await respuesta.json();
};
