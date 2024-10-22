import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/code-editor">Code Editor</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;