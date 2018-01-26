import { compose, createStore, applyMiddleware } from 'redux';
import { load, save } from 'redux-localstorage-simple';
import thunkMiddlware from 'redux-thunk';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import registerServiceWorker from './registerServiceWorker';
import IpfsFileUpload from './reducers/';
import App from './components/App';

const store = createStore(
  IpfsFileUpload,
  load({ states: ['history'] }),
  compose(
    applyMiddleware(thunkMiddlware),
    applyMiddleware(save({
      states: ['history'],
    })),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
