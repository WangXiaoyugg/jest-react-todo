import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {findTestWrapper} from "../../../../utils/testUtils";
import TodoList from "../../index"
import store from '../../../../store/createStore'

beforeEach(() => {
    jest.useFakeTimers();
});

it(`
   1. 输入框输入内容
   2. 点击回车，
   3. 列表中展示用户输入的内容
`, () => {
    const  wrapper = mount(
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );

    const inputEl = findTestWrapper(wrapper, 'header-input');
    const content = "garen";
    inputEl.simulate('change', {
        target: {value: content}
    });
    inputEl.simulate('keyup', {
        keyCode: 13,
    })
    const listItem = findTestWrapper(wrapper, "list-item");
    expect(listItem.length).toEqual(1);
    expect(listItem.text()).toContain(content);
});


/*
* {
*   data: [
*       {
*           status: 'div',
*           value: 'dell lee'
*       },
*       success: true
*   ]
* }
*
*/


it(`
   1. 用户打开页面
   2. 5秒后
   2. 应该 展示接口返回的数据
`, (done) => {
    const  wrapper = mount(
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );

    // process.nextTick(() => {
    //     wrapper.update();
    //     const listItems = findTestWrapper(wrapper, 'list-item');
    //     expect(listItems.length).toBe(1);
    //     done()
    // });

        jest.runAllTimers();
        done();
        process.nextTick(() => {
            wrapper.update();
            const listItems = findTestWrapper(wrapper, 'list-item');
            expect(listItems.length).toBe(1);
            done()
        });

});
