import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from 'material-ui/Button';

import Header from '../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has an image upload button', () => {
  const header = shallow(<Header />);

  expect(header.dive().find(Button)).toHaveLength(1);
});
