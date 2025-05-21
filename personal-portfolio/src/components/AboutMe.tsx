import React from 'react';
import './AboutMe.css';

const profileInfo = {
  name: 'Ta Anh Luan',
  title: 'Product Owner & Web Consultant',
  summary:
    'With over a decade of experience in the financial and digital sectors, I specialize in bridging the gap between business goals and tech implementation. I’ve worked with global teams in Switzerland, France, Japan, Singapore, and Vietnam—bringing agile leadership, product strategy, and delivery excellence.',
  bio: 'Passionate about turning ideas into reality through powerful product strategy and seamless user experiences.',
  contacts: [
    { label: 'Birthday', value: '04 Feb 1992' },
    { label: 'Website', value: 'jonathanta.info', link: 'https://jonathanta.info' },
    { label: 'Phone', value: '+84 939 451 139' },
    { label: 'City', value: 'Ho Chi Minh City, Vietnam' },
    { label: 'Age', value: '32' },
    { label: 'Degree', value: 'Bachelor in IT (Network Engineering)' },
    { label: 'Email', value: 'taanhluan@gmail.com', mail: true },
    { label: 'Freelance', value: 'Available' },
  ],
  stats: [
    { icon: 'far fa-smile', value: '20+', label: 'Clients & Projects' },
    { icon: 'fas fa-tasks', value: '50+', label: 'Product Features Delivered' },
    { icon: 'fas fa-headset', value: '3000+', label: 'Consulting Hours' },
    { icon: 'fas fa-users', value: '15+', label: 'Teams Supported' },
  ],
  image: 'https://raw.githubusercontent.com/taanhluan/JonathanTa/main/assets/images/Avtn.jpg',
};

const AboutMe: React.FC = () => {
  const leftList = profileInfo.contacts.slice(0, 4);
  const rightList = profileInfo.contacts.slice(4);

  return (
    <section className="about-container" aria-labelledby="about-title">
      <h2 className="section-title" id="about-title">About</h2>
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

      <div className="about-stats">
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
