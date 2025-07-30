import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export default function useRoleRedirect(token) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) return;
        try {
            const payload = jwtDecode(token);
            const role = payload.role;
            if (role === 'ADMIN') navigate('/admin');
            else if (role === 'ESTUDIANTE') navigate('/estudiante');
            else if (role === 'PROFESOR') navigate('/profesor');
        } catch (e) {
            console.error('Token inválido');
        }
    }, [token, navigate]);
}