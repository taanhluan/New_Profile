import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2 className="section-title">Resume</h2>
      <div className="resume-section">
        <h3 className="resume-subtitle">Experience</h3>
        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-date">Oct 2024 – Present</div>
            <div className="timeline-content">
              <h4>Product Owner – Axon Active (Migros Bank, Switzerland)</h4>
              <p>Leading the digital banking transformation for Migros Bank including affordability, ZEK, document APIs. Responsible for roadmap, backlog, KPIs, and stakeholder alignment.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Oct 2023 – Oct 2024</div>
            <div className="timeline-content">
              <h4>Product Owner / Senior Business Analyst – BIC Bank (Cambodia)</h4>
              <p>Directed retail digital banking delivery, implemented AML, T24, and Backbase integration. Led centralized Payment Hub and KPI framework.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Nov 2022 – Oct 2023</div>
            <div className="timeline-content">
              <h4>Senior Business Analyst – Xebia Group (ABBank Project)</h4>
              <p>Oversaw digital transformation with Backbase & T24. Delivered lending, eKYC, and transaction banking services. Acted as advisor to directors on agility & tech strategy.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Apr 2022 – Nov 2022</div>
            <div className="timeline-content">
              <h4>Project Manager / Scrum Master – FPT Software</h4>
              <p>Managed cross-functional teams (40+) for e-commerce and manufacturing projects. Delivered performance tracking, financial reporting, and customer-focused results using Agile/Hybrid.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Jan 2021 – Apr 2022</div>
            <div className="timeline-content">
              <h4>Senior Business Analyst / Scrum Master – Amaris (Mantu Group)</h4>
              <p>Led insurance digital projects across global markets. Managed data migration, UATs, and multidisciplinary coordination in Agile/Scrum and Hybrid environments.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Aug 2020 – Jan 2021</div>
            <div className="timeline-content">
              <h4>Senior Business Analyst – JACCS Financial Group</h4>
              <p>Defined solutions for card services and credit systems. Ensured timeline delivery, vendor coordination, and system compliance in Agile workflows.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">May 2020 – Aug 2020</div>
            <div className="timeline-content">
              <h4>Senior Business Analyst – Innotech</h4>
              <p>Led business analysis for digital finance startup projects. Handled gap analysis, solution validation, stakeholder alignment, and scope control.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Jun 2018 – May 2020</div>
            <div className="timeline-content">
              <h4>Project Coordinator / Business Analyst – Home Credit</h4>
              <p>Built EPIC configurations and dashboards using Loxon & Genesys. Worked on-site in the Czech Republic to transfer systems and train teams.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Apr 2017 – Jun 2018</div>
            <div className="timeline-content">
              <h4>Technical Support – Maersk Line</h4>
              <p>Managed IT risk registers, reporting, and quality control across portfolios. Collaborated with cyber risk teams and ensured governance compliance.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2014 – 2016</div>
            <div className="timeline-content">
              <h4>Freelancer – Business Analyst & Developer</h4>
              <p>Freelanced on small-to-mid scale software and business analysis projects in Vietnam, contributing to early-stage startup system design and delivery.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
