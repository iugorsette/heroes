import { useContext } from "react";
import { Container, DarkIcon, LightIcon, Logo, ToggleButton } from "./styles";
import { themeContext } from "../../context/ThemeContext";
import { NavBar } from "../NavBar";

import logo from "../../assets/hero-logo.png";

export function Header() {
  const { isDarkTheme, setIsDarkTheme } = useContext(themeContext)!;

  function toggleTheme() {
    setIsDarkTheme();
    window.location.reload();
  }

  function goToMenu() {
    window.location.href = "/";
  }

  return (
    <>
      <Container>
        <Logo src={logo} alt="Hero App" onClick={goToMenu} />
        <h1>Hero App</h1>
        <ToggleButton onClick={toggleTheme}>
          {isDarkTheme ? <LightIcon /> : <DarkIcon />}
        </ToggleButton>
      </Container>
      <NavBar />
    </>
  );
}
