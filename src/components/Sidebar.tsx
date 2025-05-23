import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './Sidebar.css';
import ThemeToggle from '../ThemeToggle';

interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

interface SidebarProps {
  name: string;
  avatarUrl: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/', icon: 'fa-home' },
  { name: 'About Me', path: '/about', icon: 'fa-user' },
  { name: 'Resume', path: '/resume', icon: 'fa-file-alt' },
  { name: 'Portfolio', path: '/portfolio', icon: 'fa-briefcase' },
  { name: 'Blog', path: '/blog', icon: 'fa-blog' },
  { name: 'Contact', path: '/contact', icon: 'fa-envelope' },
];

const Sidebar: React.FC<SidebarProps> = ({ name, avatarUrl, socialLinks }) => {
  const location = useLocation();

  const renderSocialIcon = (iconClass: string, url?: string) => {
    if (!url) return null;
    return (
      <a
        key={iconClass}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={iconClass}
      >
        <i className={`fab ${iconClass}`}></i>
      </a>
    );
  };

  return (
    <div className="sidebar">
      <div className="avatar-box">
        <img src={avatarUrl} alt={`${name} avatar`} className="avatar" />
        <h2>{name}</h2>
        <div className="social-icons">
          {renderSocialIcon('fa-facebook-f', socialLinks.facebook)}
          {renderSocialIcon('fa-instagram', socialLinks.instagram)}
          {renderSocialIcon('fa-github', socialLinks.github)}
          {renderSocialIcon('fa-linkedin-in', socialLinks.linkedin)}
        </div>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={classNames({ active: location.pathname === item.path })}
          >
            <Link to={item.path}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Dropdown đổi giao diện nằm cuối cùng và căn giữa */}
      <ThemeToggle />
    </div>
  );
};

export default Sidebar;
