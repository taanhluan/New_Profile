import React, { useEffect, useState } from 'react';
import './Home.css';

const fullText = `Hello, I’m Jonathan Ta
Product Owner & Digital Consultant
Based in Vietnam. I specialize in building scalable digital products, banking systems, and strategy-driven UX solutions.`;

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const speed = 25;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="typing-text">
            {text}
            <span className="cursor">|</span>
          </div>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://raw.githubusercontent.com/taanhluan/JonathanTa/main/assets/images/Avtn.jpg"
            alt="Jonathan Ta"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
