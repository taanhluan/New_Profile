import React from 'react';
import './Blog.css';

interface BlogPost {
  title: string;
  date: string;
  summary: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Navigating Digital Banking Projects',
    date: 'May 10, 2025',
    summary: 'Insights and strategies from delivering scalable digital banking platforms in Switzerland and Southeast Asia.',
  },
  {
    title: 'The Role of a Product Owner in Hybrid Agile Teams',
    date: 'April 25, 2025',
    summary: 'Lessons learned from balancing stakeholder needs, business goals, and team delivery in hybrid enterprise environments.',
  },
  {
    title: 'Building Seamless UX for Financial Products',
    date: 'March 12, 2025',
    summary: 'How to align UX design with product vision in compliance-heavy domains like finance and insurance.',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="blog" aria-labelledby="blog-section-title">
      <h2 id="blog-section-title" className="section-title">
        Blog
      </h2>
      <div className="blog-list">
        {blogPosts.map(({ title, date, summary }, index) => (
          <article className="blog-card" key={index} tabIndex={0} aria-label={`Blog post titled ${title}`}>
            <h3 className="blog-card-title">{title}</h3>
            <time className="blog-date" dateTime={new Date(date).toISOString()}>
              {date}
            </time>
            <p className="blog-summary">{summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
