import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LoginForm from 'components/commons/LoginForm.component.js';
import { LogoutCloseSessionFirebase } from 'components/actions';

const UserBlockWrapper = styled.div`
    display: flex;
`;

const PhotoProfile = styled.div`
    & img {
        width: 50px;
        height: 50px;
        border-radius: 59px;
    }
`;

const DataProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    color: #fff;
`;

const LoginLinkWrapper = styled.div`
    text-align: center;
    cursor: pointer;
    color: #fff;
    & a {
        color: #fff;
    }
`;
const LogoutLinkWrapper = styled.div`
color: #232121;
font-size: 2em;
padding: 5px 10px;
`;

const LoginLink = () => (
    <LoginLinkWrapper className="LoginLinkWrapper login-link">
        <a href="#" data-toggle="modal" data-target=".bs-example-modal-lg">Login / Register</a>
        
    </LoginLinkWrapper>
);

const LogoutLink = ({ logout }) => (
    <LogoutLinkWrapper className="LogoutLinkWrapper" onClick={logout}>
        <i className="fa fa-power-off" aria-hidden="true"></i>
    </LogoutLinkWrapper>);

const LoggedUser = ({ user, logout }) => (
    <UserBlockWrapper className="UserBlockWrapper">
        <PhotoProfile className="photo-profile">
            <img src={user.photoURL || '/images/profile.jpg'} alt="photo profile" />
        </PhotoProfile>
        <DataProfile className="data-profile">
            <div className="user-name">Welcome,<wbr /> {user.displayName || 'Manuel Test'}</div>
            <div className="user-email">{user.email}</div>
        </DataProfile>
        <LogoutLink logout={logout} />

    </UserBlockWrapper>);


class UserBlock extends Component {
    static propTypes = {
    }

    render() {
        return (
            <div className="user">
                {this.props.user && <LoggedUser user={this.props.user} logout={this.props.actions.logout} />}
                {!this.props.user && <LoginLink />}
                <LoginForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            logout: () => dispatch(LogoutCloseSessionFirebase())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);