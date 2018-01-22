import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import History from '../components/History';
import Header from '../components/Header';
import Upload from '../components/Upload';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

import * as appActions from '../actions/';

require('typeface-roboto');

const App = ({ upload, history, actions }) => (
  <div className="App">
    <Header
      disabled={upload.disabled}
      postUpload={actions.postUpload}
    />
    <div
      style={{ padding: 12, marginTop: 64 }}
      className="container"
    >
      <Upload
        error={upload.error}
        disabled={upload.disabled}
        clearError={actions.clearError}
        postUpload={actions.postUpload}
      />
      <History
        history={history.items}
        clear={actions.clearHistory}
      />
      <Cards />
      <Footer />
    </div>
  </div>
);

App.propTypes = {
  upload: PropTypes.shape({
    disabled: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    postUpload: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  upload: state.upload,
  history: state.history,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
