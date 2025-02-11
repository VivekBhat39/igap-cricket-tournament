import React, { useState } from 'react';
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/login`, { username, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/admin/dashboard';
    } catch (error) {
      alert('Login failed');
    }
  };

  // function handleLogin(e) {
  //   e.preventDefault();
  //   if (username == "admin" && password == "admin") {
  //     window.location.href = '/admin/dashboard';
  //   } else {
  //     alert("Invalid Credentioal !!!")
  //   }
  // }

  return (
    <div className="container mt-5">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
