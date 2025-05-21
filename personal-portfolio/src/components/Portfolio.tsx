import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Fintech App – Migros Bank',
    description: 'A digital banking platform including affordability simulation, ZEK credit check API, and document verification.',
    image: 'https://via.placeholder.com/400x200?text=Migros+Bank'
  },
  {
    title: 'Retail Banking Portal – BIC Bank',
    description: 'Led the digital channel revamp with AML screening, payment hub, and KPI monitoring.',
    image: 'https://via.placeholder.com/400x200?text=BIC+Bank'
  },
  {
    title: 'Insurance CRM – Amaris',
    description: 'Cross-market policy tracking system with automated workflows and UAT coordination.',
    image: 'https://via.placeholder.com/400x200?text=Amaris+CRM'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
