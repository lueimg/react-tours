import React from 'react';
import { connect } from 'react-redux';

class UserData extends React.PureComponent {
    render() {
        return (
            <a href="#" data-jq-dropdown="#jq-dropdown-1" className="user">
                {this.props.user.email && <DataProfile user={this.props.user} />}
            </a>
        );
    }
}

class DataProfile extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="photo-profile">
                    <img src={this.props.user.photoURL} alt="photo profile" />
                </div>
                <div className="data-profile">
                    <p className="user-name">Welcome, <wbr />{this.props.user.displayName}</p>
                    <p className="user-email">{this.props.user.email}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user || {}
    };
};

export default connect(mapStateToProps)(UserData);
