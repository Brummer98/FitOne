import sum from './sum';
import React from 'react';
import ReactDOM from 'react-dom';
import index from '../index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<index />, div);
  ReactDOM.unmountComponentAtNode(div);
});
