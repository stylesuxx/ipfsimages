import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Card from 'material-ui/Card';

import Footer from '../components/Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has an single card', () => {
    const footer = shallow(<Footer />);

    expect(footer.dive().find(Card)).toHaveLength(1);
  });
});
