import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TEMPLATE from './TEMPLATE';

Enzyme.configure({ adapter: new Adapter() });

describe('TEMPLATE Component', () => {
   it('renders without crashing', () => {
      shallow(<TEMPLATE />);
    });
});