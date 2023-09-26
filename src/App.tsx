import { ThemeProvider } from "styled-components";
import darkTheme from "./theme/dark-theme";
import { useContext } from "react";
import lightTheme from "./theme/light-theme";
import { themeContext } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Deck } from "./pages/Deck";
import { Duel } from "./pages/Duel";
import { Cards } from "./pages/Cards";

function App() {
  const { isDarkTheme } = useContext(themeContext);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Cards" Component={Cards} />
            <Route path="/Deck" Component={Deck} />
            <Route path="/Duel" Component={Duel} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
