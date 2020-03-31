import React from 'react';
import { Router, Link } from "@reach/router"
import { ThemeProvider } from "emotion-theming"

import { Home } from './routes/Home';
import { theme } from './helpers/EmotionTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <nav>
          <Link to="/">Home</Link> <Link to="blog">Blog</Link>
        </nav>
        <Router>
          <Home path="/" default/>
        </Router>
        <footer>
          &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
