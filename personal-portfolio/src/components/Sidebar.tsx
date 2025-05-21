import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', icon: 'fa-home' },
    { name: 'About Me', path: '/about', icon: 'fa-user' },
    { name: 'Resume', path: '/resume', icon: 'fa-file-alt' },
    { name: 'Portfolio', path: '/portfolio', icon: 'fa-briefcase' },
    { name: 'Blog', path: '/blog', icon: 'fa-blog' },
    { name: 'Contact', path: '/contact', icon: 'fa-envelope' },
  ];

  return (
    <div className="sidebar">
      <div className="avatar-box">
        <img src="https://i.pravatar.cc/100" alt="Profile" className="avatar" />
        <h2>Alex Smith</h2>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
