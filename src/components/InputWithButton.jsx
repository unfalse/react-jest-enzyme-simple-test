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

    handleTextChange(value) {
        this.setState({ t: value });
    }

    render() {
        return (<div>
                <TextInput
                    name="t"
                    value={this.state.t}
                    onChange={value => this.handleTextChange(value)}/>
                <button disabled={this.state.t===''}>
                        Button
                </button>
            </div>);
    }
}

export default InputWithButton;