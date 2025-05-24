import React, { createContext, useContext, useState, useEffect } from 'react';

// Export kiểu ThemeType để import bên ngoài
export type ThemeType = 'pinkOrange' | 'purplePink' | 'yellowPurple';

const ThemeContext = createContext<{
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}>({ theme: 'pinkOrange', setTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('pinkOrange');

  useEffect(() => {
    const body = document.body;
    // Xóa tất cả class theme cũ
    body.classList.remove('theme-pinkOrange', 'theme-purplePink', 'theme-yellowPurple');
    // Thêm class theme mới
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

// Hook tiện lợi để dùng context
export const useTheme = () => useContext(ThemeContext);