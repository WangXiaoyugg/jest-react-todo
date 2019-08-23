import React, {Component} from 'react';
import "../style.css";

class UndoList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const list = this.props.list;
        const deleteItem = this.props.deleteItem;
        const changeStatus = this.props.changeStatus;
        return (
            <div className="undo-list">
                <div  className="undo-list-title">
                    正在进行
                    <div data-test="count" className="undo-list-count">{list.length}</div>
                </div>
                <ul className="undo-list-content">
                    {
                        list.map((item, index) => {
                            return (
                                <li data-test="list-item"
                                    key={index}
                                    className="undo-list-item"
                                    onClick={() => changeStatus(index)}
                                >
                                    {item.value}
                                    <div
                                        className="undo-list-delete"
                                        data-test="delete-item"
                                        onClick={() => {deleteItem(index)}}
                                    >-</div>
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
