import React from 'react';
import { Router, Link } from "@reach/router"
import { Home } from './routes/Home';
import styled from "@emotion/styled";

const Main = styled.main`width: 100%;`

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="blog">Blog</Link>
      </nav>
      <Main>
        <Router>
          <Home path="/" />
        </Router>
      </Main>
      <footer>
        &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
