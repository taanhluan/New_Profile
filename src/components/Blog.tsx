import React from 'react';
import './Blog.css';

const blogPosts = [
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
    <section className="blog">
      <h2 className="section-title">Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
