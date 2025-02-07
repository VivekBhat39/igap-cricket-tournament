import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleMatch = () => {
  const [teams, setTeams] = useState([]);
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/teams`);
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  const handleScheduleMatch = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/matches/schedule`, { teamA, teamB, date });
      alert('Match scheduled successfully');
    } catch (error) {
      alert('Failed to schedule match');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Schedule New Match</h2>
      <form onSubmit={handleScheduleMatch}>
        <div className="mb-3">
          <label className="form-label">Team A</label>
          <select className="form-control" value={teamA} onChange={(e) => setTeamA(e.target.value)} required>
            <option value="">Select Team A</option>
            {teams.map(team => <option key={team._id} value={team.name}>{team.name}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Team B</label>
          <select className="form-control" value={teamB} onChange={(e) => setTeamB(e.target.value)} required>
            <option value="">Select Team B</option>
            {teams.map(team => <option key={team._id} value={team.name}>{team.name}</option>)}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Schedule Match</button>
      </form>
    </div>
  );
};

export default ScheduleMatch;
