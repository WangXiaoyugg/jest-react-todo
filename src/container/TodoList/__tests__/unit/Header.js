import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Header from '../../components/Header';

it('组件包含input框', () => {
    const wrapper = shallow(<Header />);
    const inputEl = wrapper.find("[data-test='input']");
    expect(inputEl.length).toBe(1);
});

it('组件包含input框内容初始化为空', () => {
    const wrapper = shallow(<Header />);
    const inputEl = wrapper.find("[data-test='input']");
    expect(inputEl.prop('value')).toEqual('');
});

it('组件包含input框内，当用户输入内容时， value随着变化', () => {
    const wrapper = shallow(<Header />);
    const inputEl = wrapper.find("[data-test='input']");
    const userInput = '学习jest';
    inputEl.simulate('change', {
        target: {value: userInput}
    });
    expect(wrapper.state('value')).toEqual(userInput);
    // const newInputEl = wrapper.find("[data-test='input']");
    // expect(newInputEl.prop('value')).toBe(userInput);
});

it("Header 组件 input 输入回车时，input无内容，无操作", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>);
    const inputEl = wrapper.find("[data-test='input']");
    wrapper.setState({
        value: ''
    });
    inputEl.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
});

it("Header 组件 input 输入回车时，input有内容，函数fn应该被调用", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>);
    const inputEl = wrapper.find("[data-test='input']");
    const userInput = '学习react'
    wrapper.setState({
        value: userInput
    });
    inputEl.simulate('keyUp', {
        keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith(userInput);
});


it("Header 组件 input 输入回车时，input有内容，最后应该被清除", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn}/>);
    const inputEl = wrapper.find("[data-test='input']");
    const userInput = '学习react'
    wrapper.setState({
        value: userInput
    });
    inputEl.simulate('keyUp', {
        keyCode: 13
    });
    const newInputEl = wrapper.find("[data-test='input']");
    expect(inputEl.prop('value')).toBe('');
});
