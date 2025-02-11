import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateMatchResult() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [result, setResult] = useState("Scheduled")

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/matches`)
      .then(response => setMatches(response.data))
      .catch(error => console.error('Error fetching matches:', error));
  }, []);

  const handleUpdate = async (e) => {

    const scoreData = {
      scoreA: parseInt(scoreA),
      scoreB: parseInt(scoreB),
    }


    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/matches/update/${selectedMatch}`, { scoreA, scoreB });
      alert('Match result updated successfully');
    } catch (error) {
      console.error('Error updating match result:', error);
      alert('Failed to update match result');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Match Result</h2>
      <select className="form-select mb-3" onChange={(e) => setSelectedMatch(e.target.value)}>
        <option>Select Match</option>
        {matches.map(match => {
          return (
            <option key={match._id} value={match._id}>{match.teamA} vs {match.teamB}</option>
          )
        })}
      </select>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Score Team A</label>
          <input type="number" className="form-control" value={scoreA} onChange={(e) => setScoreA(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Score Team B</label>
          <input type="number" className="form-control" value={scoreB} onChange={(e) => setScoreB(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Update Result</button>
      </form>
    </div>
  );
}

export default UpdateMatchResult;