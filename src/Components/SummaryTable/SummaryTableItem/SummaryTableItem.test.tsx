import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTableItem from './SummaryTableItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTableItem Component', () => {
   it('renders without crashing', () => {
      shallow(<SummaryTableItem />);
    });
});
