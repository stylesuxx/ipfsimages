import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddlware from 'redux-thunk';
import { load, save } from 'redux-localstorage-simple';
import { compose, createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import IpfsFileUpload from './reducers/';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  IpfsFileUpload,
  load({ states: ['history'] }),
  compose(
    applyMiddleware(thunkMiddlware),
    applyMiddleware(save({ states: ['history'] })),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
