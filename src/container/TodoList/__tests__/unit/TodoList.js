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

    it(" UndoList 接受 list, deleteItem, changeStatus, handleBlur 四个参数", () => {
        const wrapper = shallow(<TodoList/>);
        const UndoList = wrapper.find('UndoList');
        expect(UndoList.prop('list')).toBeTruthy();
        expect(UndoList.prop('deleteItem')).toBeTruthy();
        expect(UndoList.prop('changeStatus')).toBeTruthy();
        expect(UndoList.prop('handleBlur')).toBeTruthy();
        expect(UndoList.prop('valueChange')).toBeTruthy();
    });


    it("当deleteItem方法被执行的时候，undoList 数据项被删除", () => {
        const wrapper = shallow(<TodoList/>);
        const listData = [{
            status: 'div',
            value: 'vue',
        }, {
            status: 'div',
            value: 'react',
        }, {
            status: 'div',
            value: 'angular'
        }];
        wrapper.setState({
            undoList: listData
        })
        wrapper.instance().deleteItem(1);
        expect(wrapper.state("undoList")).toEqual([listData[0], listData[2]])
    });

    it("当changeStatus方法被执行的时候，undoList某一项status被改变为status", () => {
        const wrapper = shallow(<TodoList/>);
        const listData = [{
            status: 'div',
            value: 'vue',
        }, {
            status: 'div',
            value: 'react',
        }, {
            status: 'div',
            value: 'angular'
        }];
        wrapper.setState({
            undoList: listData
        })
        wrapper.instance().changeStatus(1);
        expect(wrapper.state("undoList")[1]).toEqual({
            ...listData[1],
            status: 'input'
        })
    });

    it("当handleBlur方法被执行的时候，undoList某一项status改变成div", () => {
        const wrapper = shallow(<TodoList/>);
        const listData = [{
            status: 'div',
            value: 'vue',
        }, {
            status: 'input',
            value: 'react',
        }, {
            status: 'div',
            value: 'angular'
        }];
        wrapper.setState({
            undoList: listData
        })
        wrapper.instance().handleBlur(1);
        expect(wrapper.state("undoList")[1]).toEqual({
            ...listData[1],
            status: 'div'
        })
    });

    it("当valueChange方法被执行的时候，undoList某一项value被修改", () => {
        const wrapper = shallow(<TodoList/>);
        const listData = [
            {
                status: 'input',
                value: 'vue',
            },
        ];
        const value = 'react';

        wrapper.setState({
            undoList: listData
        });

        wrapper.instance().valueChange(0, value);
        expect(wrapper.state('undoList')[0]).toEqual({
            ...listData[0],
            value,
        })
        // expect(wrapper.state("undoList")[1]).toEqual({
        //     ...listData[1],
        //     status: 'div'
        // })
    });

})




