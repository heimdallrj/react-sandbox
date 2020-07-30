import React from 'react';
import { Link } from 'react-router-dom';
import ImageView from 'components/atomic/ImageView';
import logo from 'assets/logo.svg';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageView src={logo} className="App-logo" alt="logo" />

        <p>
          <Link
            className="App-link"
            rel="noopener noreferrer"
            to="/libs/react-file-viewer"
          >
            react-file-viewer
          </Link>
        </p>
      </header>
    </div>
  );
}

export default App;
