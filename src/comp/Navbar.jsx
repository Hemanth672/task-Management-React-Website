import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: 'blue',
    padding: '10px',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    margin: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'White',
    padding: '8px',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>InfyJob Technologies</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
