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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Login</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your username" 
                            required 
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            placeholder="Enter your password" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-sm text-center text-gray-600 mt-4">
                    Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
