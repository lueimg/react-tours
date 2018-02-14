import { LOAD_USER, LOGOUT_USER } from './constants.js';
import FirebaseApi from 'components/FirebaseApi.js';

export function LoadUser(user) {
    return {
        type: LOAD_USER,
        user
    };
}

export function LogoutUser() {
    return {
        type: LOGOUT_USER
    };
}

export const LogoutCloseSessionFirebase = () => {
    FirebaseApi.logoutUser();
    return LogoutUser();
};



const getUserProfile = () => {
    return FirebaseApi.getUserProfile();
};

export const loadUserProfile = (user) => {
    return (dispatch) => {
        return getUserProfile().then(
            (result) => {
                const profile = result ? result.profile : { role: 'user' };
                dispatch(LoadUser({ ...user, profile }));
            }, (error) => console.log('loadUserProfile', error)
        );
    };
};