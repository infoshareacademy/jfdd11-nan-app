import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';
import MainMenu from '../MainMenu';

class Root extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ width: '20%', background: '#eee' }}>
            <MainMenu />
          </div>

          <div
            style={{
              flexGrow: 1,
              minHeight: '100vh',
              padding: 20,
              boxSizing: 'border-box',
            }}
          >
            <Route path="/app" component={App} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Root;