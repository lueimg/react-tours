import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

const LogoFieldWrap = styled.div `
    margin: 20px;
`;

const LogoFielTitle = styled.div `
    margin: 20px;
    font-weight: bold;
`;

class VideoField extends PureComponent {

    state = {
        url: '',
        description: ''
    };

    componentDidMount = () => {
        if (this.props.defaultValues) {
            const {url, description} = this.props.defaultValues;
            this.setState({url, description});
        }
    }

    onFieldChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this
                .props
                .onUpdate({
                    ...this.state
                })
        });
    }

    render() {
        return (
            <LogoFieldWrap>
                <LogoFielTitle>{this.props.title}</LogoFielTitle>
                <TextField
                    onChange={this.onFieldChange}
                    hintText="url"
                    name="url"
                    value={this.state.url}
                    floatingLabelText="url"/>
                <TextField
                    onChange={this.onFieldChange}
                    hintText="description"
                    name="description"
                    value={this.state.description}
                    floatingLabelText="description"/>

            </LogoFieldWrap>
        );
    }
}

VideoField.propTypes = {
    title: PropTypes.string,
    defaultValues: PropTypes.shape({url: PropTypes.string, description: PropTypes.string}),
    onUpdate: PropTypes.func.isRequired
};

// Specifies the default values for props:
VideoField.defaultProps = {
    title: 'Video: '
};

export default VideoField;