import React from 'react'
import { shallow, mount } from 'enzyme'

import LoginBox from '.'

/*
  Good guidelines to follow! Read this first:
  https://alligator.io/react/testing-react-redux-with-jest-enzyme 

    CheatSheet
    https://devhints.io/enzyme

*/

describe('LoginBox component', () => {

  it('should render', () => {
    const wrapper = shallow(<LoginBox/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should NOT show an error \'button\' if the error prop is NOT set', () => {
    const wrapper = shallow(<LoginBox />);

    expect(wrapper.find('Button').length).toBe(1);
  })

  it('should show an error \'button\' if the error prop is set', () => {
    const wrapper = shallow(<LoginBox error />);

    expect(wrapper.find('Button').length).toBe(2);
  })

  it('should print Email or password wrong on error button', () => {
    //Shallow wrapping doesn’t descend down to sub-components. A full mount also mounts sub-components.
    const wrapper = mount(<LoginBox error />);

    expect(wrapper.find('Button').at(1).text()).toBe("Email or password wrong.");
  })

})