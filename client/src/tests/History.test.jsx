import React from 'react';
import { shallow } from 'enzyme';

import Card from 'material-ui/Card';
import Button from 'material-ui/Button';

import History from '../components/History';

const historyItems = [
  {
    date: '2018/1/1',
    time: '10:10:10',
    hash: 'QmZpc3HvfjEXvLWGQPWbHk3AjD5j8NEN4gmFN8Jmrd5g83/cs/ada.png',
  },
  {
    date: '2018/1/1',
    time: '10:10:09',
    hash: 'QmZpc3HvfjEXvLWGQPWbHk3AjD5j8NEN4gmFN8Jmrd5g83/cs/alan.jpg',
  },
];
const historyEmpty = [];

it('renders without crashing', () => {
  shallow((
    <History
      clear={() => false}
      history={historyItems}
    />
  ));
});

it('has no "Clear Upload History" button with no uploads', () => {
  const history = shallow((
    <History
      clear={() => false}
      history={historyEmpty}
    />
  ));

  expect(history.dive().find(Button)).toHaveLength(0);
});

it('has "Clear Upload History" button with uploads', () => {
  const history = shallow((
    <History
      clear={() => false}
      history={historyItems}
    />
  ));

  expect(history.dive().find(Button)).toHaveLength(1);
});

it('has Card items with uploads', () => {
  const history = shallow((
    <History
      clear={() => false}
      history={historyItems}
    />
  ));

  expect(history.dive().find(Card)).toHaveLength(historyItems.length);
});

it('has no Card items with empty uploads', () => {
  const history = shallow((
    <History
      clear={() => false}
      history={historyEmpty}
    />
  ));

  expect(history.dive().find(Card)).toHaveLength(historyEmpty.length);
});
