import React, {Component} from 'react';
import "../style.css";

class UndoList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const list = this.props.list;
        const deleteItem = this.props.deleteItem;
        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li data-test="list-item" key={index}>
                                    {item}
                                    <span
                                        data-test="delete-item"
                                        onClick={() => {deleteItem(index)}}
                                    >-</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}

export default UndoList;
