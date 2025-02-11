import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PointTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/teams`)
      .then(response => setTeams(response.data))
      .catch(error => console.error('Error fetching teams:', error));

    // axios.get("https://67a6b848510789ef0dfc04e8.mockapi.io/teams")
    //   .then((res) => {
    //     // console.log(res.data);
    //     setTeams(res.data)
    //   })
  }, []);

  return (
    <div className="container mt-5">
      <div style={{ backgroundColor: "white", display: "inline-block", padding: "10px", borderRadius: "10px" }}>
        <Link to={"/"}>
          <img
            style={{ width: "100px" }}
            src="https://igaptechnologies.com/assets/images/logo.png"
            alt="iGAP Technologies Logo"
          />
        </Link>
      </div>
      <div className="d-flex justify-content-between">
        <h2>Points Table</h2>
        {/* The button moved to the right */}
        <Link to={"/matches"}>
          <a href="/matches-scheduled" className="btn btn-warning btn-lg mx-2">
            View Matches Scheduled
          </a>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Matches Played</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team.name}</td>
              <td>{team.matchesPlayed}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PointTable;