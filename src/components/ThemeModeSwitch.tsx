import { useThemeContext } from '@/context/ThemeContextProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function ThemeModeSwitch() {
  const { theme, changeTheme } = useThemeContext();
  return (
    <div>
      {theme === 'dark' ? (
        <MdLightMode
          onClick={() => changeTheme()}
          className='text-xl cursor-pointer hoverText'
        />
      ) : (
        <MdDarkMode
          onClick={() => changeTheme()}
          className='text-xl cursor-pointer hoverText'
        />
      )}
    </div>
  );
}

export default ThemeModeSwitch;
