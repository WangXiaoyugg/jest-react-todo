import React, {Component} from 'react';
import Header from './components/Header'
import UndoList from './components/UndoList'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addUndoItem = this.addUndoItem.bind(this);
        this.state = {
            undoList: [],
        }
    }

    addUndoItem(value) {
        this.setState({
            undoList: [...this.state.undoList, value],
        })
    }

    render() {
        return (
            <div>
                <Header addUndoItem={this.addUndoItem}/>
                <UndoList />
            </div>
        );
    }

}

export default TodoList;
