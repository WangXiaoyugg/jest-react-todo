import React from 'react';
import  {shallow} from 'enzyme';

import Header from '../../components/Header';
import { findTestWrapper } from '../../../../utils/testUtils'

describe("Header 组件测试", () => {
    it('样式渲染正常', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    it('组件包含输入框', () => {
        const wrapper = shallow(<Header />);
        const inputEl = findTestWrapper(wrapper, 'input');
        expect(inputEl.length).toBe(1);
    });
    it('输入框初始化为空', () => {
        const wrapper = shallow(<Header />);
        const inputEl = findTestWrapper(wrapper, 'input');
        expect(inputEl.prop('value')).toEqual('');
    });
    it('输入框随用户输入发生变化', () => {
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

    it("输入框无内容输入回车事件，无反应", () => {
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

    it("输入框有内容时触发回车事件，外部函数被调用， 内容被清空", () => {
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

        const newInputEl = findTestWrapper(wrapper, 'input');
        expect(inputEl.prop('value')).toBe('');
    });


});













