import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'GTV Vietnam – Corporate & Retail Digital Banking',
    description:
      'Led product strategy and AML integration across T24 & Backbase platforms for both corporate and retail banking users.',
    image: 'https://via.placeholder.com/400x200?text=GTV+Vietnam'
  },
  {
    title: 'Axon Active – Mortgage Lending Platform (Migros Bank)',
    description:
      'Defined end-to-end digital mortgage lending workflows including ZEK integration, affordability simulation, and document handling.',
    image: 'https://via.placeholder.com/400x200?text=Axon+Active'
  },
  {
    title: 'BIC Bank Cambodia – Retail Digital Channel Revamp',
    description:
      'Delivered a modern AML screening solution, centralized payment hub, and KPI dashboard for digital retail banking operations.',
    image: 'https://via.placeholder.com/400x200?text=BIC+Bank+Cambodia'
  },
  {
    title: 'Home Credit & FeCredit – Consumer Finance Solutions',
    description:
      'Worked on loan origination systems, collections strategies, and decisioning platform enhancements using PEGA and Loxon.',
    image: 'https://via.placeholder.com/400x200?text=Home+Credit+FeCredit'
  },
  {
    title: 'ABBank – Core Banking & Backbase UX Redesign',
    description:
      'Integrated payment gateway with Backbase, optimized onboarding processes, and improved customer lifecycle UX flows.',
    image: 'https://via.placeholder.com/400x200?text=ABBank'
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
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
