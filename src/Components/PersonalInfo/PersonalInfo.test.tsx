import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonalInfo from './PersonalInfo';

Enzyme.configure({ adapter: new Adapter() });

describe('PersonalInfo Component', () => {
    describe('In General', () => {
       let wrapper : ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
       beforeEach(() => {
         wrapper = shallow(<PersonalInfo />);
       })
      it('renders without crashing', () => {
         expect(wrapper.find('#PersonalInfoWrapper')).toHaveLength(1)
       });
      it('renders name input', () => {
         expect(wrapper.find('#input-name')).toHaveLength(1)
      });
      it('renders profession input', () => {
         expect(wrapper.find('#input-profession')).toHaveLength(1)
      });
   });
});