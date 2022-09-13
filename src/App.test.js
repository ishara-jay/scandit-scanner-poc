import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({ adapter: new Adapter() });

describe('App Component', () => {
  const wrapper = shallow(<App />);
  
  it('App includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('App includes correct html innerText', () => {
    expect(wrapper.find('button').text()).toEqual("PRINT");
  }); 
});

