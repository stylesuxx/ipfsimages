import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Card from 'material-ui/Card';

import Info from '../components/Info';

describe('Info component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Info />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has 1 card', () => {
    const info = shallow(<Info />);

    expect(info.dive().find(Card)).toHaveLength(1);
  });
});
