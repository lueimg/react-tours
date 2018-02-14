import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import {isLocationAllowed} from 'components/Utils.js';

const Loading = () => <div>Firebase Loading ...</div>;

const PrivateRoute = ({ user, isFirebaseLoaded, component: Component, ...rest }) => {
    const isUserAuthenticated = !!user;

    return <Route {...rest} render={(props) => (
        !isFirebaseLoaded ? <Loading {...props} /> :
            isUserAuthenticated && isLocationAllowed(props.location.pathname, user) ? <Component {...props} /> :
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />;
};

const mapStateToProps = (state) => {
    return {
        // Always is false before initializing
        user: state.user,
        // We must wait that FirebaseApi.onUserStateChange is done , 
        // to now if FB is ready , It is resolved in configStore.js
        isFirebaseLoaded: state.isFirebaseLoaded
    };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));