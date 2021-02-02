import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Income } from './Income';

Enzyme.configure({ adapter: new Adapter() });

describe('Income Component', () => {
   it('renders without crashing', () => {
      shallow(<Income />);
    });
});
