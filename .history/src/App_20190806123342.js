import React, { Component } from 'react';
import './App.css';

import Header from './shared/components/Header'
import SearchPanel from './shared/components/SearchPanel/SearchPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div style={{padding: '10px 20px'}}>
            <SearchPanel />
            <p>
              Please show a list of jobs as per design
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
