import React, { useState } from 'react';
import Header from "./Header"; 
import Footer from "./Footer";
import "./styles/style.css";
import "./styles/about.css";
import './styles/signup.css';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const user = { username, password, email };
  
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setUsername('');
        setPassword('');
        setEmail('');
      }
    };
  
    return (
      <>
        <Header />
        <div className="signup-container">
          <h2>Sign Up</h2>
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
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <Footer />
      </>
    );
  }

export default SignUp;
