import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import FirebaseApi from 'components/firebaseApi';
import LinearProgress from 'material-ui/LinearProgress';
import {connect} from 'react-redux';
import { UploadImage } from 'components/actions';

class UploadField extends Component {

    state = {
        url: null,
        completed: 100
    }

    onFile = (files) => {
        const file = files.target.files[0];
        if (!file) return false;

        this.props.actions.UploadImage(file.name, file)
            .subscribe((data) => {
                switch (data.action) {
                    case 'running':
                        this.setState({completed: data.progress});
                        break;
                    case 'done':
                        this.setState({completed: 100, url: data.url });
                        this.props.onUploadFile(data.url);
                        break;
                }
            });
    }

    render() {
        return (
            <div>
                <input type="file" name="business" onChange={this.onFile} disabled={this.state.completed < 100} />
                {this.state.completed < 100 && 
                    <LinearProgress mode="determinate" value={this.state.completed} /> 
                }
            </div>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        actions: {
            UploadImage: (name, file) => { return UploadImage(name, file); }
        }
    };
    
};


UploadField.propTypes = {
    onUploadFile: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(UploadField);