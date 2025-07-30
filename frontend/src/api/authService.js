const API_URL = 'http://localhost:8080/api/auth/login';

export const login = async (credentials) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) throw new Error('Credenciales inválidas');
    return await response.json();
};