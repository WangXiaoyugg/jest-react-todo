import React, {Component} from 'react';
import "../style.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: e.target.value,
        })
    };

    handleKeyUp(e) {
        if(e.keyCode === 13 && this.state.value) {
            this.props.addUndoItem(this.state.value);
            this.setState({
                value: '',
            })
        }
    }

    render() {
        const {value} = this.state;
        return (
            <div className="header">
                <div className="header-content">
                    TodoList
                    <input
                        placeholder="AddTodo"
                        type="text"
                        className="header-input"
                        data-test="input"
                        value={value}
                        onChange={this.handleInput}
                        onKeyUp={this.handleKeyUp}
                    />
                </div>

            </div>
        );
    }

}

export default Header;
