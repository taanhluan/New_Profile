import React from 'react';
import './Resume.css';

const experiences = [
  {
    date: 'Oct 2024 – Present',
    title: 'Product Owner – Axon Active (Migros Bank, Switzerland)',
    desc: 'Leading the digital banking transformation for Migros Bank including affordability, ZEK, document APIs. Responsible for roadmap, backlog, KPIs, and stakeholder alignment.',
  },
  {
    date: 'Oct 2023 – Oct 2024',
    title: 'Product Owner / Senior Business Analyst – BIC Bank (Cambodia)',
    desc: 'Directed retail digital banking delivery, implemented AML, T24, and Backbase integration. Led centralized Payment Hub and KPI framework.',
  },
  {
    date: 'Nov 2022 – Oct 2023',
    title: 'Senior Business Analyst – Xebia Group (ABBank Project)',
    desc: 'Oversaw digital transformation with Backbase & T24. Delivered lending, eKYC, and transaction banking services. Acted as advisor to directors on agility & tech strategy.',
  },
  {
    date: 'Apr 2022 – Nov 2022',
    title: 'Project Manager / Scrum Master – FPT Software',
    desc: 'Managed cross-functional teams (40+) for e-commerce and manufacturing projects. Delivered performance tracking, financial reporting, and customer-focused results using Agile/Hybrid.',
  },
  {
    date: 'Jan 2021 – Apr 2022',
    title: 'Senior Business Analyst / Scrum Master – Amaris (Mantu Group)',
    desc: 'Led insurance digital projects across global markets. Managed data migration, UATs, and multidisciplinary coordination in Agile/Scrum and Hybrid environments.',
  },
  {
    date: 'Aug 2020 – Jan 2021',
    title: 'Senior Business Analyst – JACCS Financial Group',
    desc: 'Defined solutions for card services and credit systems. Ensured timeline delivery, vendor coordination, and system compliance in Agile workflows.',
  },
  {
    date: 'May 2020 – Aug 2020',
    title: 'Senior Business Analyst – Innotech',
    desc: 'Led business analysis for digital finance startup projects. Handled gap analysis, solution validation, stakeholder alignment, and scope control.',
  },
  {
    date: 'Jun 2018 – May 2020',
    title: 'Project Coordinator / Business Analyst – Home Credit',
    desc: 'Built EPIC configurations and dashboards using Loxon & Genesys. Worked on-site in the Czech Republic to transfer systems and train teams.',
  },
  {
    date: 'Apr 2017 – Jun 2018',
    title: 'Technical Support – Maersk Line',
    desc: 'Managed IT risk registers, reporting, and quality control across portfolios. Collaborated with cyber risk teams and ensured governance compliance.',
  },
  {
    date: '2014 – 2016',
    title: 'Freelancer – Business Analyst & Developer',
    desc: 'Freelanced on small-to-mid scale software and business analysis projects in Vietnam, contributing to early-stage startup system design and delivery.',
  },
];

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2 className="section-title">Career Roadmap</h2>
      <div className="resume-section">
        <h3 className="resume-subtitle">Experience</h3>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              className="timeline-item"
              key={idx}
              style={{
                transform: `translateX(${idx % 2 === 0 ? '-20px' : '20px'})`,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-content">
                <h4>{exp.title}</h4>
                <p>{exp.desc}</p>
              </div>
            </div>
          ))}
          <div className="roadmap-path"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;