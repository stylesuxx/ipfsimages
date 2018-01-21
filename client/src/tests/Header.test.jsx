import React from 'react';
import { shallow } from 'enzyme';

import Button from 'material-ui/Button';

import Header from '../components/Header';

it('renders without crashing', () => {
  shallow((
    <Header
      disabled={false}
      postUpload={() => false}
    />
  ));
});

it('has an image upload button', () => {
  const header = shallow((
    <Header
      disabled={false}
      postUpload={() => false}
    />
  ));

  expect(header.dive().find(Button)).toHaveLength(1);
});

it('should trigger function on change', () => {
  const header = shallow((
    <Header
      disabled={false}
      postUpload={() => false}
    />
  ));

  header.dive().find('input').simulate('change', {
    target: {
      files: [{}],
    },
  });
});
