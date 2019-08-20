import React from 'react';
import {shallow} from 'enzyme';

import TodoList from '../../index';

it("TodoList 初始化 列表为空", () => {
    const wrapper = shallow(<TodoList/>);
    expect(wrapper.state('undoList')).toEqual([]);
});

it("TodoList 给Header 传递addUndoItem方法", () => {
    const wrapper = shallow(<TodoList/>);
    const Header = wrapper.find('Header');
    expect(Header.prop('addUndoItem')).toBeTruthy();
});

it("addUndoItem 被执行的时候，应该新增内容", () => {
    const wrapper = shallow(<TodoList/>);
    wrapper.instance().addUndoItem('vue');
    expect(wrapper.state('undoList').length).toBe(1);
    expect(wrapper.state('undoList')[0]).toBe('vue');
    wrapper.instance().addUndoItem('react');
    expect(wrapper.state('undoList').length).toBe(2);
});

it("TodoList 应该给 UndoList 传递 list属性和 deleteItem 方法", () => {
   const wrapper = shallow(<TodoList/>);
   const UndoList = wrapper.find('UndoList');
   expect(UndoList.prop('list')).toBeTruthy();
   expect(UndoList.prop('deleteItem')).toBeTruthy()
});

it("TodoList 应该给 UndoList 传递 list属性和 deleteItem 方法", () => {
    const wrapper = shallow(<TodoList/>);
    const UndoList = wrapper.find('UndoList');
    expect(UndoList.prop('list')).toBeTruthy();
    expect(UndoList.prop('deleteItem')).toBeTruthy()
});

it("当deleteItem方法被执行的时候，undoList 应该删除内容", () => {
    const wrapper = shallow(<TodoList/>);
    wrapper.setState({
        undoList: ['vue', 'react', 'angular']
    })
    wrapper.instance().deleteItem(1);
    expect(wrapper.state("undoList")).toEqual(['vue', 'angular'])
});
