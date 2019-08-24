import React, {Component} from 'react';
import "../style.css";
import {connect} from "react-redux";
import {actions} from '../store/'

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: e.target.value,
        })
    };

    handleKeyUp(e, value) {
        if(e.keyCode === 13 && value) {
            this.props.addUndoItem(value);
            this.props.handleInputChange("");
        }
    }

    render() {
        const {handleInputChange, value} = this.props;
        return (
            <div className="header">
                <div className="header-content">
                    TodoList
                    <input
                        placeholder="AddTodo"
                        type="text"
                        className="header-input"
                        data-test="header-input"
                        value={value}
                        onChange={(e) => handleInputChange(e.target.value)}
                        onKeyUp={(e) => this.handleKeyUp(e, value)}
                    />
                </div>

            </div>
        );
    }

}
const mapState = (state) => {
    return {
        value: state.todo.inputValue
    }
};
const  mapDispatch = dispatch => ({
    handleInputChange(value) {
        dispatch(actions.changeInputValue(value));
    },

});

export default connect(mapState, mapDispatch)(Header);
