'use client';

import React, {
  useState,
  useEffect,
  ReactNode,
  createContext,
  useContext,
} from 'react';

type ThemeType = 'dark' | 'light';
type ThemeContextType = {
  theme: ThemeType;
  changeTheme: (newTheme?: ThemeType) => void;
};

type ThemeContextProviderPropsType = {
  children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  changeTheme: () => {},
});

const darkStyle = 'dark:text-gray-200 dark:bg-gray-700';
const lightStyle = 'text-gray-700 bg-gray-200';

function ThemeContextProvider({ children }: ThemeContextProviderPropsType) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  const toggleTheme = (theme: ThemeType) => {
    return theme === 'dark' ? 'light' : 'dark';
  };

  const applyTheme = (newTheme: ThemeType) => {
    // const body = document.body;
    // document.body.classList.remove('dark', 'light');
    // document.body.classList.add(newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const themeToApply = savedTheme || 'dark';
    setTheme(themeToApply);
    applyTheme(themeToApply);
  }, []);

  //test if is there conflict with changeTheme
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = (newTheme?: ThemeType) => {
    const themeToApply = newTheme || theme === 'dark' ? 'light' : 'dark';
    // const themeToApply = newTheme ? newTheme : toggleTheme(theme);
    console.log('theme:', theme, { themeToApply });
    setTheme(themeToApply);
    localStorage.setItem('theme', themeToApply);
    // Remove the old theme class and add the new one
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(themeToApply);
    // applyTheme(themeToApply);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <section
        className={
          'dark:text-gray-200 dark:bg-gray-900 min-h-screen mx-auto max-w-6xl select-none transition-colors duration-300 text-gray-900  bg-gray-300}' //bg-gray-300 it d'snt work
        }

        // className={`${darkStyle} min-h-screen select-none transition-colors duration-300 ${lightStyle}`}

        // className='text-amber-500 bg-gray-900'
      >
        {children}
      </section>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

//use hook for theme context
export function useThemeContext() {
  const { theme, changeTheme } = useContext(ThemeContext);
  if (!theme || theme == undefined) {
    throw new Error('useTheme must be within a ThemeContextProvider');
  }
  return { theme, changeTheme };
}
