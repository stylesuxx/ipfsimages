import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddlware from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './containers/App';
import IpfsFileUpload from './reducers/';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  IpfsFileUpload,
  undefined,
  compose(applyMiddleware(thunkMiddlware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
