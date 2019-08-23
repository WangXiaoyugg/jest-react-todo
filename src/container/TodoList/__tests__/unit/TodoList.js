import React from 'react';
import {shallow} from 'enzyme';

import TodoList from '../../index';

describe("TodoList 组件测试", () => {
    it("初始化列表为空", () => {
        const wrapper = shallow(<TodoList/>);
        expect(wrapper.state('undoList')).toEqual([]);
    });
    it("Header 存在addUndoItem 属性", () => {
        const wrapper = shallow(<TodoList/>);
        const Header = wrapper.find('Header');
        expect(Header.prop('addUndoItem')).toBeTruthy();
    });
    it("addUndoItem 被执行的时候，undoList数据增加", () => {
        const wrapper = shallow(<TodoList/>);
        let data = 'vue';
        let {addUndoItem } = wrapper.instance();
        addUndoItem(data);
        expect(wrapper.state('undoList').length).toBe(1);
        expect(wrapper.state('undoList')[0]).toEqual({
            status: 'div',
            value: data
        });
        addUndoItem(data);
        expect(wrapper.state('undoList').length).toBe(2);
    });

    it(" UndoList 接受 list 和 deleteItem, changeStatus 三个参数", () => {
        const wrapper = shallow(<TodoList/>);
        const UndoList = wrapper.find('UndoList');
        expect(UndoList.prop('list')).toBeTruthy();
        expect(UndoList.prop('deleteItem')).toBeTruthy();
        expect(UndoList.prop('changeStatus')).toBeTruthy();

    });


    it("当deleteItem方法被执行的时候，undoList 数据项被删除", () => {
        const wrapper = shallow(<TodoList/>);
        let data = ['vue', 'react', 'angular'];
        wrapper.setState({
            undoList: data
        })
        wrapper.instance().deleteItem(1);
        expect(wrapper.state("undoList")).toEqual([data[0], data[2]])
    });

})




