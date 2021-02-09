import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FinancialStatement from './FinancialStatement';

Enzyme.configure({ adapter: new Adapter() });

describe('FinancialStatement Component', () => {
   it('renders without crashing', () => {
      shallow(<FinancialStatement />);
    });
});