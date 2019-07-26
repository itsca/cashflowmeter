import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SummaryTableToolBar from './SummaryTableToolBar';

Enzyme.configure({ adapter: new Adapter() });

describe('SummaryTableToolBar Component', () => {
   it('renders without crashing', () => {
      shallow(<SummaryTableToolBar numSelected={0}/>);
    });
});