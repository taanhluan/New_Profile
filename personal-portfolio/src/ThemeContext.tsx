import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeType =
  | 'pinkOrange'
  | 'purplePink'
  | 'yellowPurple'
  | 'darkCherry'
  | 'neonMatrix'
  | 'sunsetPeach'
  | 'cyberGold'
  | 'forestNight'
  | 'blushRose'
  | 'aquaDream'
  | 'midnightInk';

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}>({ theme: 'pinkOrange', setTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('pinkOrange');

  useEffect(() => {
    const body = document.body;
    body.classList.remove(
      'theme-pinkOrange',
      'theme-purplePink',
      'theme-yellowPurple',
      'theme-darkCherry',
      'theme-neonMatrix',
      'theme-sunsetPeach',
      'theme-cyberGold',
      'theme-forestNight',
      'theme-blushRose',
      'theme-aquaDream',
      'theme-midnightInk'
    );
    body.classList.add(`theme-${theme}`);

    return () => {
      body.classList.remove(`theme-${theme}`);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
