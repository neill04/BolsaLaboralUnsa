import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white shadow-md h-screen p-4">
            <h2 className="text-2xl font-bold text-pink-600 mb-8">Dashboard</h2>
            <nav className="flex flex-col gap-4">
                <Link to="/empresas" className="text-gray-700 hover:text-pink-500 transition">
                    Empresas
                </Link>
                <Link to="/ofertas" className="text-gray-700 hover:text-pink-500 transition">
                    Ofertas
                </Link>
                <Link to="/estudiantes" className="text-gray-700 hover:text-pink-500 transition">
                    Estudiantes
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;