import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Go to index.html.
        </p>
        <a
          className="App-link"
          href="../public/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here!
        </a>
      </header>
    </div>
  );
}

export default App;
