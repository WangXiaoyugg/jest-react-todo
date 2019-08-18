import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const container = wrapper.find('[data-test="container"]');
  // expect(container.length).toBe(1);
  // // console.log(wrapper.debug());
  // expect(container.prop('title')).toBe('garen');
  expect(container).toExist();
  expect(container).toHaveProp('title', 'garen');
  expect(wrapper).toMatchSnapshot();
});
