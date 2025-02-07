import React, { useState } from 'react';
import axios from 'axios';

const CreateAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/admin/create`, { username, password });
      alert('Admin created successfully');
    } catch (error) {
      alert('Failed to create admin');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Admin</h2>
      <form onSubmit={handleCreateAdmin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Admin</button>
      </form>
    </div>
  );
};

export default CreateAdmin;