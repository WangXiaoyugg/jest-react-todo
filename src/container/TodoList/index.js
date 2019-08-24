import React, {Component} from 'react';
import Header from './components/Header'
import UndoList from './components/UndoList'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addUndoItem = this.addUndoItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.state = {
            undoList: [],
        }
    }

    addUndoItem(value) {
        this.setState({
            undoList: [...this.state.undoList, {
                value: value,
                status: 'div',
            }],
        })
    }
    deleteItem(index) {
        let newList = [...this.state.undoList];
        newList.splice(index, 1);
        this.setState({
            undoList: newList,
        })
    }
    changeStatus(index) {
        let newList =  this.state.undoList.map((item, idx) => {
            if(index === idx) {
                return {
                    ...item,
                    status: 'input'
                }
            } else {
                return {
                    ...item,
                    status: 'div'
                }
            }
        });

        this.setState({
            undoList: newList
        })
    }

    handleBlur(index) {
        let newList =  this.state.undoList.map((item, idx) => {
            if(index === idx) {
                return {
                    ...item,
                    status: 'div'
                }
            } else {
                return item
            }
        });

        this.setState({
            undoList: newList
        })
    }
    valueChange(index, value) {
        let newList = this.state.undoList.map((item, idx) => {
            if(index === idx) {
                return {
                    ...item,
                    value,
                }
            } else {
                return item;
            }
        });

        this.setState({
            undoList: newList,
        })
    }
    render() {
        return (
            <div>
                <Header addUndoItem={this.addUndoItem}/>
                <UndoList list={this.state.undoList}
                          deleteItem={this.deleteItem}
                          changeStatus={this.changeStatus}
                          handleBlur={this.handleBlur}
                          valueChange={this.valueChange}
                />
            </div>
        );
    }

}

export default TodoList;
