import React, { useEffect, useState } from 'react';
import './Home.css';

const fullText = `Hi, I'm Jonathan Product Owner & Digital Consultant.
I craft digital products and simplify banking tech.`;



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