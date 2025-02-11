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

  // function handleCreateTeam(e) {
  //   e.preventDefault();
  //   const data = {
  //     name: name,
  //     players: players,
  //     points: 0,
  //     matchesPlayed: 0,
  //     wins: 0,
  //     losses: 0
  //   };

  //   axios.post("https://67a6b848510789ef0dfc04e8.mockapi.io/teams", data)
  //     .then((res) => {
  //       console.log(res.data);
  //       alert("Team Added")
  //       setName("")
  //       setPlayers("")
  //     })

  // };

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