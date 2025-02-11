import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MatchSchedule = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/matches`);
      setMatches(response.data);
    };
    fetchMatches();

    // axios.get("https://67a6b848510789ef0dfc04e8.mockapi.io/matches")
    //   .then((res) => {
    //     // console.log(res.data);
    //     setMatches(res.data);
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
        <h2 className="mb-4">Scheduled Matches</h2>
        {/* The button moved to the right */}
        <Link to={"/points"}>
          <a className="btn btn-danger btn-lg mx-2">
            Check Point Table
          </a>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Team A</th>
            <th>Team B</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match._id}>
              <td>{match.teamA}</td>
              <td>{match.teamB}</td>
              <td>{match.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

export default MatchSchedule;