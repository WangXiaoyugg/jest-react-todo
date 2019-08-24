import React from 'react'
import {mount} from 'enzyme'
import {findTestWrapper} from "../../../../utils/testUtils";
import TodoList from "../../index"
it(`
   1. 输入框输入内容
   2. 点击回车，
   3. 列表中展示用户输入的内容
`, () => {
    const  wrapper = mount(<TodoList/>);

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
