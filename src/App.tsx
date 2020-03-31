import React from 'react';
import { Router, Link, RouteComponentProps } from "@reach/router"

const TestA = ({ path }: RouteComponentProps) => <p>A</p>;
const TestB = ({ path }: RouteComponentProps) => <p>B</p>;

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <Link to="b">B</Link>
      </nav>
      <main>
        <Router>
          <TestA path="/" />
          <TestB path="b" />
        </Router>
      </main>
      <footer>
        &copy; Zbigniew Żołnierowicz {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
