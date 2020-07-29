import React from 'react';
import ImageView from 'components/atomic/ImageView';
import logo from 'assets/logo.svg';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageView src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Sandbox
        </a>
      </header>
    </div>
  );
}

export default App;
