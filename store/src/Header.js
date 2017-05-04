import React from 'react';
import {Link} from 'react-router-dom';

export default function() {
  return (
        <div className="Header">
            <h2 className="headerText">My Store!</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/items">Items</Link></li>
            </ul>
        </div>
    );
}