import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import TodoList from '../../index';

it("TodoList 初始化 列表为空", () => {
    const wrapper = shallow(<TodoList/>);
    expect(wrapper.state('undoList')).toEqual([]);
});

it("TodoList 给Header 传递一个增加 undoList 内容的方法", () => {
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem);
});

it("Header 调用回车时，TodoList 的 undoList 应该新增内容", () => {
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    const addFn = Header.prop('addUndoItem');
    addFn('学习react');
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe('学习react');

});

