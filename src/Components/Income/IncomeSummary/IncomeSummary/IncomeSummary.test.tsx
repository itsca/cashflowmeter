import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IncomeSummary from './IncomeSummary';

Enzyme.configure({ adapter: new Adapter() });

describe('IncomeSummary Component', () => {
   it('renders without crashing', () => {
      shallow(<IncomeSummary
               incomeTotal={0}
               activeIncomeTotal={0}
               activeIncomePercentage={0}
               passiveIncomeTotal={0}
               passiveIncomePercentage={0}
             />);
    });
});
