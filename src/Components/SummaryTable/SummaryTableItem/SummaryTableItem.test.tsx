import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTableItem from './SummaryTableItem';
import { SummaryTableRowData } from '../SummaryTable';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTableItem Component', () => {
   it('renders without crashing', () => {
      const testRow: SummaryTableRowData = {
         name: 'Test',
         amount: 0,
         id: '1'
      }
      shallow(
      <SummaryTableItem 
         row={testRow} 
         labelId={''}
         isItemSelected={false}
         handleSelectClick={(event, rowId) => console.log('')}
         onValueCasted={(row, values) => console.log('')}
      />);
    });
});
