import React, { useState } from 'react';
import axios from 'axios';

const CreateTeam = () => {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState('');

  const handleCreateTeam = async (e) => {
    e.preventDefault();
    try {
      const playerArray = players.split(',').map(player => ({ name: player.trim() }));
      await axios.post(`${import.meta.env.VITE_API_URL}/api/teams/create`, { name, players: playerArray });
      alert('Team created successfully');
    } catch (error) {
      alert('Failed to create team');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create New Team</h2>
      <form onSubmit={handleCreateTeam}>
        <div className="mb-3">
          <label className="form-label">Team Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Players (comma-separated)</label>
          <input type="text" className="form-control" value={players} onChange={(e) => setPlayers(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeam;