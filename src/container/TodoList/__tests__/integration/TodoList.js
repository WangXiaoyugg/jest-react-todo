import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import {findTestWrapper} from "../../../../utils/testUtils";
import TodoList from "../../index"
import store from '../../../../store/createStore'
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
