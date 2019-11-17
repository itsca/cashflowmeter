import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTable from './SummaryTable';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTable Component', () => {
   it('renders without crashing', () => {
      shallow(<SummaryTable />);
    });
});