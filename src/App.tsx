import React, { useState } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarProps = {
    name: 'Jonathan Ta',
    avatarUrl: 'https://github.com/taanhluan/JonathanTa/blob/main/assets/images/Avt.jpg?raw=true',
    socialLinks: {
      facebook: 'https://www.facebook.com/taanh.luan.5',
      instagram: 'https://www.instagram.com/taanhluan/',
      github: 'https://github.com/taanhluan',
      linkedin: 'https://www.linkedin.com/in/taanhluan/',
    },
  };

  return (
    <ThemeProvider>
      <Router>
        <div className={`app-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
          {/* Hamburger button for mobile */}
          <button className="hamburger" onClick={toggleSidebar}>
            <i className="fas fa-bars"></i>
          </button>

          {/* Sidebar */}
          <Sidebar {...sidebarProps} />

          {/* Main Content */}
          <main className="main-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
            {/* NOTE: Removed ThemeToggle here to avoid duplicate */}
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
