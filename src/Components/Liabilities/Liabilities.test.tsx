import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Liabilities } from './Liabilities';

Enzyme.configure({ adapter: new Adapter() });

describe('Liabilities Component', () => {
   it('renders without crashing', () => {
      shallow(<Liabilities />);
    });
});
