import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upload from '../components/Upload';
import History from '../components/History';

const store = {
  subscribe: () => false,
  dispatch: () => false,
  getState: () => (
    {
      upload: {
        disabled: false,
      },
      history: {
        items: [],
      },
    }
  ),
};

describe('App component', () => {
  it('renders without crashing', () => {
    shallow((<App store={store} />));
  });

  it('has a "Header" component', () => {
    const app = shallow((<App store={store} />));

    expect(app.dive().find(Header)).toHaveLength(1);
  });

  it('has a "Footer" component', () => {
    const app = shallow((<App store={store} />));

    expect(app.dive().find(Footer)).toHaveLength(1);
  });

  it('has an "Upload" component', () => {
    const app = shallow((<App store={store} />));

    expect(app.dive().find(Upload)).toHaveLength(1);
  });

  it('has a Header component', () => {
    const app = shallow((<App store={store} />));

    expect(app.dive().find(History)).toHaveLength(1);
  });
});
