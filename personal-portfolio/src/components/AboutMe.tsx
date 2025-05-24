// src/components/AboutMe.tsx

import React, { useState } from 'react';
import './AboutMe.css';
import { profileInfo } from "../Data/about";
const AboutMe: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const leftList = profileInfo.contacts.slice(0, 4);
  const rightList = profileInfo.contacts.slice(4);

  return (
    <section className={`about-container ${darkMode ? 'dark' : 'light'}`} aria-labelledby="about-title">
      <div className="about-header">
        <h2 className="section-title" id="about-title">About</h2>
        <div className="about-controls">
          <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
          </button>
          <a className="download-cv" href={profileInfo.cvLink} download>
            📄 Download CV
          </a>
        </div>
      </div>

      <p className="intro-text">{profileInfo.summary}</p>

      <div className="about-content">
        <div className="about-image">
          <img src={profileInfo.image} alt={profileInfo.name} />
        </div>

        <div className="about-info">
          <h3>{profileInfo.title}</h3>
          <p className="highlight">{profileInfo.bio}</p>

          <div className="info-grid">
            {[leftList, rightList].map((list, idx) => (
              <ul key={idx}>
                {list.map((item, i) => (
                  <li key={i}>
                    <strong>{item.label}:</strong>{' '}
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{item.value}</a>
                    ) : item.mail ? (
                      <a href={`mailto:${item.value}`}>{item.value}</a>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <p className="desc">
            With a decade of practical experience, I’ve managed multidisciplinary teams from 5 to 40+ members, playing key roles as Business Analyst, Scrum Master, Project Manager, and Product Owner. My approach focuses on aligning technical implementation with business goals to deliver impactful digital platforms.
          </p>
        </div>
      </div>

      <div className="about-skills">
        {profileInfo.skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-label">
              <span>{skill.label}</span>
              <span>{skill.value}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-stats slider">
        {profileInfo.stats.map((stat, index) => (
          <div className="stat-box" key={index} aria-label={stat.label}>
            <i className={stat.icon} aria-hidden="true"></i>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;