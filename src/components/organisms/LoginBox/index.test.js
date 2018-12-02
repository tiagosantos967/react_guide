import React from 'react'
import { shallow, mount } from 'enzyme'

import { LOGIN_REQUEST } from './actions'
import configureStore from "redux-mock-store";
const mockStore = configureStore();

import LoginBox from '.'

/*
  Good guidelines to follow! Read this first:
  https://alligator.io/react/testing-react-redux-with-jest-enzyme 

    CheatSheet
    https://devhints.io/enzyme

*/

describe('LoginBox component', () => {

  it('should render', () => {
    let store = mockStore({LoginBox:{ isLoading: true }});
    const wrapper = shallow(<LoginBox store={store}/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('should NOT show an error \'button\' if the error prop is NOT set', () => {
    let store = mockStore({LoginBox:{ isLoading: true }});
    const wrapper = mount(<LoginBox store={store}/>);

    expect(wrapper.find('Button').length).toBe(1);
  })

  it('should show an error \'button\' if the error prop is set', () => {
    let store = mockStore({LoginBox:{ isLoading: true }});
    const wrapper = mount(<LoginBox error store={store}/>);

    expect(wrapper.find('Button').length).toBe(2);
  })

  it('should print Email or password wrong on error button', () => {
    let store = mockStore({LoginBox:{ isLoading: true }});
    //Shallow wrapping doesn’t descend down to sub-components. A full mount also mounts sub-components.
    const wrapper = mount(<LoginBox error store={store}/>);

    expect(wrapper.find('Button').at(1).text()).toBe("Email or password wrong.");
  })

})

describe('LoginBox actions', () => {
  it('should dispatch a login action when the login button is pressed', () => {
    let store = mockStore({LoginBox:{ isLoading: true }});
    const wrapper = mount(<LoginBox store={store}/>);

    // https://stackoverflow.com/questions/52612845/how-to-test-redux-action-by-onclick-with-enzyme
    wrapper.find('Button').first().simulate("click");

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0].type).toBe(LOGIN_REQUEST);
  })
})