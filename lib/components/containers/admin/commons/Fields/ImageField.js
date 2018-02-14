import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';

import UploadField from './UploadField';

const LogoFieldWrap = styled.div`
    margin: 20px;
`;

const LogoFielTitle = styled.div`
    margin: 20px;
    font-weight: bold;
`;


class LogoView extends PureComponent {
    remove = () => {
        this.props.onRemove();
    }

    render() {
        return (
            <div>
                <img src={this.props.image} style={{ height: 150 }} />
                <div className="options">
                    <FlatButton onClick={this.remove} label="Remove" secondary={true} />
                </div>
            </div>
        );
    }
}

LogoView.propTypes = {
    image: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
};

class ImageField extends PureComponent {

    state = {
        image: null
    };

    componentDidMount = () => {
        if (this.props.defaultValue) {
            this.setState({ image: this.props.defaultValue });
        }
    }

    updateImage = (image) => {
        this.setState({ image: image });
        this.props.onUpdate(image);
    }

    render() {
        return (
            <LogoFieldWrap>
                <LogoFielTitle>{this.props.title}</LogoFielTitle>
                {!this.state.image && <UploadField onUploadFile={this.updateImage} />}
                {this.state.image && <LogoView image={this.state.image} onRemove={this.updateImage} />}
            </LogoFieldWrap>
        );
    }
}


ImageField.propTypes = {
    title: PropTypes.string,
    defaultValue: PropTypes.string,
    onUpdate: PropTypes.func.isRequired
};

// Specifies the default values for props:
ImageField.defaultProps = {
    title: 'Image: '
};

export default ImageField;