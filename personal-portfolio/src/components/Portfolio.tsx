import React, { useState } from 'react';
import './Portfolio.css';
import projects from '../Data/projects.json'; // import từ JSON

const fallbackLogo = '/fallback-logo.png';

interface Project {
  title: string;
  description: string;
  logo?: string;
  image?: string;
  subLogos?: string[];
  overview?: string;
  techStack?: string[];
  role?: string;
  features?: string[];
  security?: string;
  challenges?: string;
  startDate?: string;
  endDate?: string;
  github?: string;
  website?: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="portfolio">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {[...projects].reverse().map((project, index) => (
          <div className="project-card" key={index} onClick={() => handleCardClick(project)}>
            <div className="project-image-wrapper">
              {project.logo && (
                <div className="project-logo">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="logo-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackLogo;
                    }}
                  />
                </div>
              )}
              {project.subLogos && project.subLogos.length > 0 && (
                <div className="sub-projects">
                  {project.subLogos.map((subLogo, i) => (
                    <img
                      key={i}
                      src={subLogo}
                      alt={`Sub logo ${i}`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = fallbackLogo;
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            <div className="modal-details">
              {selectedProject.overview && <p><strong>🧾 Overview:</strong> {selectedProject.overview}</p>}
              {selectedProject.techStack && (
                <p><strong>🧰 Tech Stack:</strong> {selectedProject.techStack.join(', ')}</p>
              )}
              {selectedProject.role && <p><strong>🧑‍💼 Role:</strong> {selectedProject.role}</p>}
              {selectedProject.features && (
                <div>
                  <strong>🧩 Features:</strong>
                  <ul>
                    {selectedProject.features.map((f, i) => (
                      <li key={i} className={f.includes("Traveled to Prague") ? "highlight-animation" : ""}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject.security && <p><strong>🔒 Security:</strong> {selectedProject.security}</p>}
              {selectedProject.challenges && <p><strong>🧠 Challenges:</strong> {selectedProject.challenges}</p>}
            </div>

            {selectedProject.subLogos && (
              <div className="sub-projects">
                {selectedProject.subLogos.map((subLogo, index) => (
                  <img
                    key={index}
                    src={subLogo}
                    alt={`Sub logo ${index}`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackLogo;
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
