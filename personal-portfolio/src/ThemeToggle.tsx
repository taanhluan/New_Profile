import React from 'react';
import { useTheme, ThemeType } from './ThemeContext';  // nhớ import ThemeType
import './ThemeToggle.css';

const themes: ThemeType[] = [
  'pinkOrange',
  'purplePink',
  'yellowPurple',
  'darkCherry',
  'neonMatrix',
  'sunsetPeach',
  'cyberGold',
  'forestNight',
  'blushRose',
  'aquaDream',
  'midnightInk',
];  // khai báo kiểu ThemeType[]

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);  // giờ đây hợp lệ vì themes[nextIndex] là ThemeType
  };

  const getEmoji = () => {
  switch (theme) {
    case 'pinkOrange': return '🌅';
    case 'purplePink': return '🎆';
    case 'yellowPurple': return '🌠';
    case 'darkCherry': return '🍒';
    case 'neonMatrix': return '🧪';
    case 'sunsetPeach': return '🌇';
    case 'cyberGold': return '🌟';
    case 'forestNight': return '🌲';
    case 'blushRose': return '🌸';
    case 'aquaDream': return '🌊';
    case 'midnightInk': return '🖋️';
    default: return '🎨';
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