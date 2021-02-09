import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExpensesSummary, { expensesSummaryInterface } from './ExpensesSummary';

Enzyme.configure({ adapter: new Adapter() });
const mockedExpensesSummary: expensesSummaryInterface = {
   totalExpenses: 0,
   activeExpenses: {
      total: 0,
      percentage: 0,
   },
   passiveExpenses: {
      total: 0,
      percentage: 0,
   }
}
describe('ExpensesSummary Component', () => {
   it('renders without crashing', () => {
      shallow(<ExpensesSummary
               incomeSummary={mockedExpensesSummary}
             />);
    });
});
