import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from "./Header"; 
import Footer from "./Footer";
import "./styles/style.css";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password };

    const response = await fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      navigate('/');
    } else {
      alert('Invalid credentials,check the values you entered');
    }
  };

  return (
    <>
      <Header />
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignIn;
