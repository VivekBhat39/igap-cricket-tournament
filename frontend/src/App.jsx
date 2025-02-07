import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import CreateAdmin from './pages/CreateAdmin';
import CreateTeam from './pages/CreateTeam';
import ScheduleMatch from './pages/ScheduleMatch';
import MatchSchedule from './pages/MatchSchedule';
import UpdateMatchResult from './pages/UpdateMatchResult';
import PointTable from './pages/PointTable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/matches" element={<MatchSchedule />} />
        <Route path="/points" element={<PointTable />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/create-admin" element={<CreateAdmin />} />
        <Route path="/admin/create-team" element={<CreateTeam />} />
        <Route path="/admin/schedule-match" element={<ScheduleMatch />} />
        <Route path="/admin/update-match-result" element={<UpdateMatchResult />} />
      </Routes>
    </Router>
  );
}

export default App;