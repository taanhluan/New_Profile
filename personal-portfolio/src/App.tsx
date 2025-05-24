import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { ThemeProvider } from './ThemeContext';
import './App.css';
import './themes.css';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const rawTarget = event.target;
      if (
        sidebarOpen &&
        rawTarget instanceof Node &&
        rawTarget instanceof HTMLElement &&
        sidebarRef.current &&
        !sidebarRef.current.contains(rawTarget) &&
        !rawTarget.classList.contains('hamburger')
      ) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  const sidebarProps = {
    name: 'Jonathan Ta',
    avatarUrl: 'https://github.com/taanhluan/JonathanTa/blob/main/assets/images/Avt.jpg?raw=true',
    socialLinks: {
      facebook: 'https://www.facebook.com/taanh.luan.5',
      instagram: 'https://www.instagram.com/taanhluan/',
      github: 'https://github.com/taanhluan',
      linkedin: 'https://www.linkedin.com/in/taanhluan/',
    },
    onItemClick: closeSidebar,
  };

  return (
    <ThemeProvider>
      <Router>
        <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <button className="hamburger" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <i className="fas fa-bars"></i>
          </button>

          <div ref={sidebarRef}>
            <Sidebar {...sidebarProps} />
          </div>

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
