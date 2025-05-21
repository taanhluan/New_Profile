import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About</h2>
      <p className="intro-text">
        I’m a Product Owner and Senior Business Analyst with over 10 years of experience in the financial, banking, insurance, and digital transformation industries. I’ve collaborated with international teams in Switzerland, France, Japan, Singapore, and Vietnam. I'm fluent in Agile/Scrum, Hybrid, and enterprise delivery models.
      </p>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://raw.githubusercontent.com/taanhluan/JonathanTa/main/assets/images/Avtn.jpg"
            alt="Ta Anh Luan"
          />
        </div>

        <div className="about-info">
          <h3>Product Owner & Web Consultant</h3>
          <p className="highlight">
            Passionate about turning ideas into reality through powerful product strategy and seamless user experiences.
          </p>

          <div className="info-grid">
            <ul>
              <li><strong>Birthday:</strong> 04 Feb 1992</li>
              <li><strong>Website:</strong> <a href="https://jonathanta.info" target="_blank" rel="noreferrer">jonathanta.info</a></li>
              <li><strong>Phone:</strong> +84 939 451 139</li>
              <li><strong>City:</strong> Ho Chi Minh City, Vietnam</li>
            </ul>
            <ul>
              <li><strong>Age:</strong> 32</li>
              <li><strong>Degree:</strong> Bachelor in IT (Network Engineering)</li>
              <li><strong>Email:</strong> taanhluan@gmail.com</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="desc">
            With a decade of practical experience, I’ve managed multidisciplinary teams from 5 to 40+ members, playing key roles as Business Analyst, Scrum Master, Project Manager, and Product Owner. My approach focuses on aligning technical implementation with business goals to deliver impactful digital platforms.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-box">
          <i className="far fa-smile"></i>
          <h3>20+</h3>
          <p>Clients & Projects</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-tasks"></i>
          <h3>50+</h3>
          <p>Product Features Delivered</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-headset"></i>
          <h3>3000+</h3>
          <p>Consulting Hours</p>
        </div>
        <div className="stat-box">
          <i className="fas fa-users"></i>
          <h3>15+</h3>
          <p>Teams Supported</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
