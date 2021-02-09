import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Assets } from './Assets';

Enzyme.configure({ adapter: new Adapter() });

describe('Assets Component', () => {
   it('renders without crashing', () => {
      shallow(<Assets />);
    });
});
