import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

/*
*
* Missing tests
* -------------------------------------
* - 'should display an input'
* - 'should display a button'
* -------------------------------------
*
* Please add any other test that you think could be missing to adequately test the App
*
* */
configure({ adapter: new Adapter() });

it('should display an input', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input').exists()).toEqual(true);
});

it('should display a button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button').exists()).toEqual(true);
});
