// src/components/Portfolio.tsx
import React from 'react';
import './Portfolio.css';

const fallbackLogo = '/fallback-logo.png';

interface Project {
  title: string;
  description: string;
  logo?: string;
  image?: string;
  subLogos?: string[];
}

const projects: Project[] = [
  {
    title: 'Futa Bus CRM Ticket Selling – Futa Express System',
    description: 'CRM for ticket sales and operation for Futa Bus Line.',
    logo: 'https://futabus.vn/_next/static/media/logo_new.8a0251b8.svg',
  
  },
  {
    title: 'Prozy – Real Estate CRM Product',
    description: 'Customer relationship management solution tailored for real estate business needs.',
    logo: 'https://propzy.net/wp-content/uploads/2024/03/propzy-logo.png'
  },
  {
    title: 'Maersk Line – Logistics Service Enhancements',
    description: 'Networking management and Salesforce CRM enhancement for global logistics.',
    logo: 'https://raw.githubusercontent.com/taanhluan/JonathanTa/5ce7dbef8cd83ca918b9720fc6e266f541346b55/assets/images/Maersk_idmLq7axTs_0.svg'
  },
  {
    title: 'Home Credit & BIC Bank – Consumer & Retail Finance Solutions',
    description: 'Developed CRM for collections, mobile unify hub, AML, payment hub, KPI dashboard, and decisioning with PEGA and Loxon.',
    logo: 'https://www.homecredit.vn/static/2de334676802a591f9444bb556bd334f/f30c4/Microsoft_Teams_image_30_1_1_394b27a905.webp',
    subLogos: [ 
      'https://www.loxon.eu/wp-content/themes/loxon-2022/assets/dist/img/header-logo.svg',
      'https://astah.net/wp-content/uploads/2019/07/Astah_blue.svg', ]
  },
  {
    title: 'JACCS – Credit Card System Integration',
    description: 'Integrated VISA and MasterCard systems with JACCS credit card management.',
    logo: 'https://jaccs.com.vn/wp-content/uploads/2020/03/logo_jaccs.png'
  },
  {
  title: 'Amaris Consulting – FECredit, Manulife, Prudential',
  description: 'Led PEGA LOS for FECredit, CRM Web/Mobile for Manulife, and back office for Prudential.',
  logo: 'https://raw.githubusercontent.com/taanhluan/JonathanTa/b03ec13dd1527adab94b8029cdf371e49a2c08a5/assets/images/idqov3ArM6_1747983073317.svg',
  subLogos: [ 
    'https://fecredit.com.vn/wp-content/themes/fe-credit/assets/home/images/logo-vn.png',
    'https://raw.githubusercontent.com/taanhluan/JonathanTa/b08030e877198ace7a49ec0a868fac99b081273d/assets/images/Manulife%20Financial%20logo.svg',
    'https://www.prudential.com.vn/export/sites/prudential-vn/vi/.thu-vien/hinh-anh/trang-chu/prudential-logo-181x32.png',
  ]
},

  {
    title: 'FPT Software – GE, Canon Projects',
    description: 'System analysis for GE; CRM and virtual meta class systems for Canon.',
    logo: 'https://fptsoftware.com/-/media/project/fpt-software/fso/uplift/home/logo_fpt_text_black.png?extension=webp&modified=20240111094946',
    subLogos:[
      'https://raw.githubusercontent.com/taanhluan/JonathanTa/9f362d02d65549bccfd063bfe74e9f662f23d246/assets/images/General_Electric-Logo.wine.svg',
       'https://www.usa.canon.com/etc.clientlibs/canon/clientlibs/clientlib-base/resources/images/header/canon-logo-red.svg',
    ]
  },
  {
    title: 'Xebia – ABBank',
    description: 'Backbase and T24 banking transformation, UX redesign, onboarding processes.',
    logo: 'https://raw.githubusercontent.com/taanhluan/JonathanTa/9f362d02d65549bccfd063bfe74e9f662f23d246/assets/images/idhOfvYsS__1735116558887.svg',
    subLogos: [
      'https://abbank.vn/uploads/images/2020/09/28/logo.png',
      ]
  },
  {
    title: 'GTV Vietnam – Corporate & Retail Digital Banking',
    description: 'Led product strategy and AML integration across T24 & Backbase platforms for corporate and retail users.',
    logo:'https://raw.githubusercontent.com/taanhluan/JonathanTa/9f362d02d65549bccfd063bfe74e9f662f23d246/assets/images/GTV.svg',
    subLogos: [
      'https://github.com/taanhluan/JonathanTa/blob/main/assets/images/download.png?raw=true',
    ]
  },
  {
    title: 'Axon Active – Mortgage Lending Platform (Migros Bank)',
    description: 'Defined digital mortgage workflows including ZEK integration and affordability simulation.',
    logo: 'https://github.com/taanhluan/JonathanTa/blob/main/assets/images/dc7825_2b761e03b89d4493a1d02c2ff8ddc080~mv2.png?raw=true',
    subLogos: ['https://raw.githubusercontent.com/taanhluan/JonathanTa/342ea74970f9b71dedf16c490cebc4ffd38b7c47/assets/images/Migros%20Bank_idMSnP4zvv_0.svg',
      ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackLogo;
                  }}
                />
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
    </section>
  );
};

export default Portfolio;
