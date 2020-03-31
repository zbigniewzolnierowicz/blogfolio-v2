import React from 'react';
import { Router, Link } from "@reach/router"
import { Home } from './routes/Home';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="blog">Blog</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Home path="/blog" />
      </Router>
      <footer>
        &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
