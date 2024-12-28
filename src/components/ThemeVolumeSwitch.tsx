import { useThemeContext } from '@/context/ThemeContextProvider';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { MdVolumeOff } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

function ThemeModeSwitch() {
  const { theme, changeTheme } = useThemeContext();
  return (
    <div>
      {isMuted === true ? (
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
