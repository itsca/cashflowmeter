import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IncomeSummary, { incomeSummaryInterface } from './IncomeSummary';

Enzyme.configure({ adapter: new Adapter() });
const mockedIncomeSummary: incomeSummaryInterface = {
   totalIncome: 0,
   activeIncome: {
      total: 0,
      percentage: 0,
   },
   passiveIncome: {
      total: 0,
      percentage: 0,
   }
}
describe('IncomeSummary Component', () => {
   it('renders without crashing', () => {
      shallow(<IncomeSummary
               incomeSummary={mockedIncomeSummary}
             />);
    });
});
