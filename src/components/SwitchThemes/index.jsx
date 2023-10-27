import { Container } from "./styles";

import { darkTheme, lightTheme } from '../../styles/theme';

import { FaMoon, FaSun } from 'react-icons/fa' 

export function SwitchThemes({toggleTheme, currentTheme}) {
  const handleToggleTheme = () => {
    currentTheme = darkTheme ? lightTheme : darkTheme;

    toggleTheme(!currentTheme)
  };

  return (
    <Container className={currentTheme === darkTheme ? "darkTheme" : "lightTheme"} onClick={handleToggleTheme} > 
      <FaSun />
      <FaMoon />
    </Container>
  );
}