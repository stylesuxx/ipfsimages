import React, { Component } from 'react';

import Header from './Header';
import Upload from './Upload';
import Cards from './Cards';

require('typeface-roboto');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: 12, marginTop: 64 }} className="container">
          <Upload />
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
