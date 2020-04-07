import React from 'react';
import Grid from '../../src/Grid';
import './DemoApp.css';

function DemoApp() {
  return (
    <div className="app">
      <header className="app-header">
        <p>
          Edit <code>src/DemoApp.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Grid>
        This is into a Grid
      </Grid>
    </div>
  );
}

export default DemoApp;
