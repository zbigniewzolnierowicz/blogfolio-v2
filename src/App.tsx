import React from "react";
import { Router /*, Link*/ } from "@reach/router";
import { ThemeProvider } from "emotion-theming";

import { Home } from "./routes/Home";
import { theme, themeInterface } from "./helpers/EmotionTheme";
import styled from "@emotion/styled";

/*
const Nav = styled.nav<{ theme: themeInterface }>`
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
`;
*/

const Footer = styled.footer<{ theme: themeInterface }>`
  display: block;
  background: ${(props) => props.theme.colors.background.color};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  padding: 2em 0;
  text-align: center;
  a {
    color: ${(props) => props.theme.colors.text}
  }
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/*<Nav>
          <Link to="/">Home</Link> <Link to="blog">Blog</Link>
        </Nav>
        */}
        <Router>
          <Home path="/" default />
        </Router>
        <Footer>
          &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}. Libraries and
          frameworks used: <a href="https://reactjs.org/">React</a>, <a href="https://emotion.sh">Emotion</a>, <a href="https://fontawesome.com">FontAwesome</a>, <a href="Reach Router">Reach Router</a>, <a href="https://prettier.io/">Prettier</a>, <a href="https://www.typescriptlang.org/">Typescript</a>.
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
