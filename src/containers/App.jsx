import React, { Component } from 'react';

import Header from '../components/Header';
import Upload from '../components/Upload';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

require('typeface-roboto');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div
          style={{ padding: 12, marginTop: 64 }}
          className="container"
        >
          <Upload />
          <Cards />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
