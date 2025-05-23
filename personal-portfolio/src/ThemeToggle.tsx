import React from 'react';
import { useTheme, ThemeType } from './ThemeContext';  // nhớ import ThemeType
import './ThemeToggle.css';

const themes: ThemeType[] = ['pinkOrange', 'purplePink', 'yellowPurple'];  // khai báo kiểu ThemeType[]

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);  // giờ đây hợp lệ vì themes[nextIndex] là ThemeType
  };

  const getEmoji = () => {
    switch (theme) {
      case 'pinkOrange':
        return '🌅';
      case 'purplePink':
        return '🎆';
      case 'yellowPurple':
        return '🌠';
      default:
        return '🌅';
    }
  };

  return (
    <button
      className="theme-toggle-btn"
      onClick={nextTheme}
      aria-label="Toggle theme"
      title="Click để đổi theme"
    >
      {getEmoji()}
    </button>
  );
};

export default ThemeToggle;
