import React, { useState } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "emotion-theming";

import { Button } from "./components/Button"
import { Home } from "./routes/Home";
import { theme, themeInterface, ThemesEnum } from "./helpers/EmotionTheme";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav<{ theme: themeInterface }>`
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
`;

const Footer = styled.footer<{ theme: themeInterface }>`
  display: block;
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  padding: 2em 0;
  text-align: center;
  a {
    color: ${(props) => props.theme.colors.text};
  }
`;

function App() {
  const [currentTheme, setCurrentTheme]: [
    ThemesEnum,
    (arg0: ThemesEnum) => void
  ] = useState<ThemesEnum>(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemesEnum.dark
      : ThemesEnum.light
  );
  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <Nav>
          {/*<Link to="/">Home</Link> <Link to="blog">Blog</Link>*/}
        </Nav>
        <Button
          buttonCss={css`
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 999;
            border-style: solid;
            border-color: white;
            border-width: 1px;
          `}
          buttonType="alt"
          onClick={() =>
            setCurrentTheme(
              currentTheme === ThemesEnum.dark
                ? ThemesEnum.light
                : ThemesEnum.dark
            )
          }
        >
          <FontAwesomeIcon icon={faPalette} />
        </Button>
        <Router>
          <Home path="/" default />
        </Router>
        <Footer>
          &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}. Libraries and
          frameworks used: <a href="https://reactjs.org/">React</a>,{" "}
          <a href="https://emotion.sh">Emotion</a>,{" "}
          <a href="https://fontawesome.com">FontAwesome</a>,{" "}
          <a href="Reach Router">Reach Router</a>,{" "}
          <a href="https://prettier.io/">Prettier</a>,{" "}
          <a href="https://www.typescriptlang.org/">Typescript</a>.
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
