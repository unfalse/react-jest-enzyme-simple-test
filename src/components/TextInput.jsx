import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            value: props.value || '',
            valid: true,
        };
    }

    handleChange(e) {
        const value = e.target.value;
        // e.persist();
        this.setState({ value }, () => {
            this.props.onChange(value);
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name={this.props.name}
                    value={this.state.value}
                    onChange={ e => this.handleChange(e) }
                />
            </div>
        );
    }
}

TextInput.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

export default TextInput;