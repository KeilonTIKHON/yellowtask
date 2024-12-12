import React, { useState } from 'react';
import api from '../utils/api';
import { setAuthToken } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import "../styles/LoginPage.css"

const Login: React.FC = () => {
  const [username, setUsername] = useState('tikhon666'); //row 9 and 10 usestate were made for login and register form but there was no form in the layout so i just put test values in there, not deleting the code just in case
  const [password, setPassword] = useState('1234567');   // test empty user:username-tikhon666, password-1234567
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
  const handleSignup = async (name:string,pass:string) => {
    try {
      const response = await api.post('/auth/signup', { username:name, password:pass });
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
      <Header isfirstpage={true} />
      <div className='wrapper'>
        <div className='bear'></div>
        <button className='letmein' onClick={handleLogin}>
          <p className='letmeintext'>
            Let me in
          </p>
        </button>
        
      </div>
    </div>


  );
};
//<button onClick={()=>handleSignup('tikhon666','1234567')}>Test button</button>
export default Login;