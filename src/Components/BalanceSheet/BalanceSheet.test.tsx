import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BalanceSheet from './BalanceSheet';

Enzyme.configure({ adapter: new Adapter() });

describe('BalanceSheet Component', () => {
   it('renders without crashing', () => {
      shallow(<BalanceSheet />);
    });
});
