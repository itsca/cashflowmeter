import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IncomeSource from './IncomeSource';

Enzyme.configure({ adapter: new Adapter() });

describe('IncomeSource Component', () => {
    describe('In General', () => {
       let wrapper : ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
       beforeEach(() => {
         wrapper = shallow(<IncomeSource />);
       })
      it('renders without crashing', () => {
         expect(wrapper.find('#IncomeSourceWrapper')).toHaveLength(1)
       });
   });
});