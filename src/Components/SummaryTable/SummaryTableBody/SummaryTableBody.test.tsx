import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTableBody from './SummaryTableBody';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTableBody Component', () => {
   it('renders without crashing', () => {
      shallow(<SummaryTableBody rows={[]} rowsPerPage={0} selectedRows={[]} order={'asc'} orderBy='' page={0} handleSelectClick={() => {}} handleItemValueChanged={(row, itemValues) => console.log('')} />);
    });
});
