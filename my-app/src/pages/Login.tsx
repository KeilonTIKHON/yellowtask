import React, { useState } from 'react';
import api from '../utils/api';
import { setAuthToken } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/signin', { username, password });
      const token = response.data.accessToken;
      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/jogs');
    } catch (error) {
      console.error('Login error', error);
    }
  };
  const handleSignup = async () => {
    try {
      const response = await api.post('/auth/signup', { username, password });
      const token = response.data.accessToken;
      console.log(response)
      localStorage.setItem('token', token);
      setAuthToken(token);
      navigate('/jogs');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Let me in</button>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button onClick={handleSignup}>Let me in</button>
    </div>
    
  );
};

export default Login;