import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            value: e.target.value,
        })
    };

    render() {
        const {value} = this.state;
        return (
            <div>
                <input type="text" data-test="input" value={value} onChange={this.handleInput}/>
            </div>
        );
    }

}

export default Header;
