import React from 'react';
import  {shallow} from 'enzyme';

import Header from '../../components/Header';
import { findTestWrapper } from '../../../../utils/testUtils'

it('Header 渲染样式正常', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

it('组件包含input框', () => {
    const wrapper = shallow(<Header />);
    const inputEl = findTestWrapper(wrapper, 'input');
    expect(inputEl.length).toBe(1);
});

it('组件包含input框内容初始化为空', () => {
    const wrapper = shallow(<Header />);
    const inputEl = findTestWrapper(wrapper, 'input');
    expect(inputEl.prop('value')).toEqual('');
});

it('组件包含input框内，当用户输入内容时， value随着变化', () => {
    const wrapper = shallow(<Header />);
    const inputEl = findTestWrapper(wrapper, 'input');
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
    const inputEl = findTestWrapper(wrapper, 'input');
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
    const inputEl = findTestWrapper(wrapper, 'input');
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
    const inputEl = findTestWrapper(wrapper, 'input');
    const userInput = '学习react'
    wrapper.setState({
        value: userInput
    });
    inputEl.simulate('keyUp', {
        keyCode: 13
    });
    const newInputEl = findTestWrapper(wrapper, 'input');

    expect(inputEl.prop('value')).toBe('');
});
