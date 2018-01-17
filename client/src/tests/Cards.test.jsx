import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Card from 'material-ui/Card';

import Cards from '../components/Cards';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cards />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has 3 cards', () => {
  const cards = shallow(<Cards />);

  expect(cards.dive().find(Card)).toHaveLength(3);
});
