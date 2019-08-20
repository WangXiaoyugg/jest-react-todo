import React, {Component} from 'react';
import "../style.css";

class UndoList extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log("this.props", this.props);
        const list = this.props.list;
        console.log("list:", list);

        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li data-test="list-item" key={index}>
                                    {item}
                                    <span data-test="delete-item">-</span>
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
