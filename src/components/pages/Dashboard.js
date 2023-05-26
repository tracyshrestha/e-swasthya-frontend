import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ role }) => {
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    // Perform logout logic here
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {role === 'PATIENT' && (
        <div>
          <h2>Patient Dashboard</h2>
          {/* Render patient-specific components */}
        </div>
      )}
      {role === 'DOCTOR' && (
        <div>
          <h2>Doctor Dashboard</h2>
          {/* Render doctor-specific components */}
        </div>
      )}
      {/* Common dashboard components */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
