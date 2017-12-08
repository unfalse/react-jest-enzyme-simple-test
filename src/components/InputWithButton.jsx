import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';

class InputWithButton extends React.Component {
    constructor() {
        super();
        this.state = {
            t: ''
        };
    }

    handleTextChange(e) {
        this.setState({ t: e.target.value });
    }

    render() {
        return (<div>
                    <TextInput
                        name="t"
                        value={this.state.t}
                        onChange={value => this.handleTextChange(value)}/>
                    <button id="button1" disabled={this.state.t===''}>
                        {this.state.t === '' ? 'Button' : this.state.t}
                    </button>
                </div>);
    }
}

export default InputWithButton;