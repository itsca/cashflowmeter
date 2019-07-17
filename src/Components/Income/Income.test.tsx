import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Income from './Income';

Enzyme.configure({ adapter: new Adapter() });

describe('Income Component', () => {
    describe('In General', () => {
       let wrapper : ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
       beforeEach(() => {
         wrapper = shallow(<Income />);
       })
      it('renders without crashing', () => {
         expect(wrapper.find('#IncomeWrapper')).toHaveLength(1)
       });
   });
});