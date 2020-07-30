import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'screens/Home';
import ReactFileViewer from 'screens/ReactFileViewer';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/libs/react-file-viewer">
        <ReactFileViewer />
      </Route>
    </Router>
  );
}

export default App;
