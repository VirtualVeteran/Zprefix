import React, { useState } from 'react';

const Login = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
   
    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            if (response.status === 201) {
                alert('Login success');
                window.location.href = 'http://localhost:3000/autenticatedview';
            } else {
                setError('User not found');
            }
        } catch (error) {
            setError('Failed to login. Please try again.');
            console.error('Error:', error);
        }
    };
  
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };
  
    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={userData.username} onChange={handleChange} name="username" placeholder="Username" />
            <input type="password" value={userData.password} onChange={handleChange} name="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
