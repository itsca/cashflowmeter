import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTableHeader from './SummaryTableHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTableHeader Component', () => {
   it('renders without crashing', () => {
      shallow(
            <SummaryTableHeader 
              numSelected={0}
              order={'asc'}
              orderBy={'amount'}
              onSelectAllClick={() => {}}
              onRequestSort={() => {}}
              rowCount={5} 
            />
      );
   });
});