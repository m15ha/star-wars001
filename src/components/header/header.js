import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import icon from './logo.png';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">   
        STAR WARS      
          <img src={icon} alt="logo" style={{height: '30px', margin: '0 0 10px 15px'}}/>
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        <li>
          <Link to="/login" style={{color: 'white'}}>Login</Link>
        </li>
      </ul>
      {/* <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        Change Service
      </button> */}
    </div>
  );
};

export default Header;