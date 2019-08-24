import React from 'react';
import  {shallow} from 'enzyme';

import UndoList from '../../components/UndoList';
import { findTestWrapper } from '../../../../utils/testUtils'

describe("UndoList 组件测试", () => {
    it('样式渲染正常', () => {
        const wrapper = shallow(<UndoList list={[]}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('初始化列表, 数目为0， 列表无内容', () => {
        const listData = [];
        const wrapper = shallow(<UndoList list={listData}/>);
        const countEl = findTestWrapper(wrapper, 'count');
        const listItems = findTestWrapper(wrapper, 'list-item');
        expect(countEl.text()).toEqual('0');
        expect(listItems.length).toEqual(0);
    });

    it('列表数据有内容，count显示长度，列表不为空', () => {
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
        const wrapper = shallow(<UndoList list={listData}/>);
        const countEl = findTestWrapper(wrapper, 'count');
        const listItems = findTestWrapper(wrapper, 'list-item');
        expect(countEl.text()).toEqual('3');
        expect(listItems.length).toEqual(3)
    });

    it('列表数据有内容，存在删除按钮', () => {
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
        const wrapper = shallow(<UndoList list={listData}/>);
        const deleteItems = findTestWrapper(wrapper, 'delete-item');
        expect(deleteItems.length).toEqual(3);
    });


    it('列表数据有内容，点击某个删除按钮，删除列表的某一项', () => {
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
        const fn = jest.fn();
        const index = 1;
        const wrapper = shallow(<UndoList list={listData} deleteItem={fn}/>);
        const deleteItems = findTestWrapper(wrapper, 'delete-item');
        deleteItems.at(index).simulate('click');
        expect(fn).toHaveBeenLastCalledWith(index);
    });

    it('当列表某一项被点击时，触发执行changeStatus函数', () => {
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
        const fn = jest.fn();
        const index = 1;
        const wrapper = shallow(<UndoList changeStatus={fn} list={listData} />);
        const deleteItems = findTestWrapper(wrapper, 'list-item');
        deleteItems.at(index).simulate('click');
        expect(fn).toHaveBeenLastCalledWith(index);
    });

    it('当列表某一项的status 是 input时，展示输入框', () => {
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
        const wrapper = shallow(<UndoList list={listData} />);
        const inputItems = findTestWrapper(wrapper, 'input');
        expect(inputItems.length).toBe(1);
    });

    it('当列表某一项的input 失去焦点时，触发执行handleBlur方法', () => {
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
        const fn =  jest.fn();
        const index = 1;
        const wrapper = shallow(<UndoList list={listData} handleBlur={fn}/>);
        const inputItems = findTestWrapper(wrapper, 'input');
        inputItems.simulate('blur');
        expect(fn).toHaveBeenCalledWith(index)
    });

    it('当某一输入框变更时，触发valueChange方法', () => {
        const listData = [
            {
                status: 'input',
                value: 'vue',
            },
        ];
        const value = 'react'
        const fn =  jest.fn();
        const wrapper = shallow(<UndoList list={listData} valueChange={fn}/>);
        const inputItems = findTestWrapper(wrapper, 'input');
        inputItems.simulate('change', {
            target: {value: value}
        });
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(0, value);

    });
})




