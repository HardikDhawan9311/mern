import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:1234/login', { username, password });
            const { accessToken } = response.data;
            localStorage.setItem('token', accessToken);
            onLogin();
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded px-2 py-1" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-2 py-1" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
}

export default Login;
