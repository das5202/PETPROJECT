import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <div className="header-container">
      <div className="logo">Employee API</div>
      <div className="nav-links">
        <Link to="/EmployeeList">Search Employees</Link>
        <Link to="/EmployeePost">Add Employee</Link>
        <Link to="/delete">Delete Employee</Link>
        <Link to="/update">Update Employee</Link>
      </div>
    </div>
  );
}

export default Header;
