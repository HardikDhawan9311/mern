import React, { useState } from 'react';
import AdminPanel from './Admin_pages/AdminPanel';
import Login from './Admin_pages/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <div className="App">
            {isAuthenticated ? (
                <>
                    <button
                        onClick={handleLogout}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                    >
                        Logout
                    </button>
                    

                    <AdminPanel />
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
