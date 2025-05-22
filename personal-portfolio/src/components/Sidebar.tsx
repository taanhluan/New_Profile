import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './Sidebar.css';

interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

interface SidebarProps {
  name?: string;
  avatarUrl?: string;
  socialLinks?: {
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

const Sidebar: React.FC<SidebarProps> = ({
  name = 'Alex Smith',
  avatarUrl = 'https://i.pravatar.cc/100',
  socialLinks = {},
}) => {
  const location = useLocation();

  const renderSocialIcon = (platform: string, url?: string) => {
    if (!url) return null;
    return (
      <a
        key={platform}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform}
      >
        <i className={`fab fa-${platform}`}></i>
      </a>
    );
  };

  return (
    <div className="sidebar">
      <div className="avatar-box">
        <img src={avatarUrl} alt={`${name} avatar`} className="avatar" />
        <h2>{name}</h2>
        <div className="social-icons">
          {renderSocialIcon('facebook-f', socialLinks.facebook)}
          {renderSocialIcon('instagram', socialLinks.instagram)}
          {renderSocialIcon('github', socialLinks.github)}
          {renderSocialIcon('linkedin-in', socialLinks.linkedin)}
        </div>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={classNames({
              active: location.pathname.startsWith(item.path),
            })}
          >
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
