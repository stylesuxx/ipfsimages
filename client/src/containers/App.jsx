import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../components/Header';
import Upload from '../components/Upload';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

import * as appActions from '../actions/';

require('typeface-roboto');

const App = ({ upload, actions }) => (
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
        clearError={actions.clearError}
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
  actions: PropTypes.shape({
    postUpload: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  upload: state.upload,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
