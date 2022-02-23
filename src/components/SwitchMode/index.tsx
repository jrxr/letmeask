import { useContext } from 'react';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}

export function SwitchMode({ toggleTheme }: Props) {
  const { title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={<MdNightlight size={25} color="#000" />}
      uncheckedIcon={<MdLightMode size={25} color="#FFFF00" />}
      height={26}
      width={50}
      handleDiameter={22}
      offColor="#CCC900"
      onColor="#808AB3"
      onHandleColor="#CCC900"
      offHandleColor="#808AB3"
    />
  );
}
