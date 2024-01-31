import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './comp/Navbar';
// import {Button} from 'react-bootstrap'


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const loginContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    height: 'fit-content', 
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    
    padding: '30px',
    width:'fit-content'

  };

  const handleLogin = () => {
    
    if (!username || !password) {
      setErrorMessage('Please enter both username and password!');
    } else {
     
      setErrorMessage('');

     
      navigate('/task-list');
    }
  };
  

  return (
    
    <div >
      <NavigationBar></NavigationBar>
      <div style={{height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=996&t=st=1705093327~exp=1705093927~hmac=073c6496cf28e4947e29b4b59bbae735d24b115502f18c738786088f22d38790")', // Replace with the actual URL
    backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
      <center>
        <br />
    <div style={loginContainerStyle}>
      <h2>Employee Task Manager</h2>
      <div>

        <input
          type="text"
          id="username"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
      
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p style={{ color: 'red',backgroundColor:"CaptionText" }}>{errorMessage}</p>}
      <br />
      <button style={{backgroundColor:'whitesmoke',color:'black',borderWidth:1,borderColor:'black',borderRadius:2}} onClick={handleLogin}>Login</button>
    </div>
    </center>
    </div>
    </div>
  );
};

export default LoginPage;
