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
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                    <AdminPanel />
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
