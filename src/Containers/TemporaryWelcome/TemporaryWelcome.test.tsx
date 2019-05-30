import React from 'react';
import ReactDOM from 'react-dom';
import TemporaryWelcome from './TemporaryWelcome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TemporaryWelcome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
