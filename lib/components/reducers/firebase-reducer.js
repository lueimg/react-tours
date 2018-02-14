import { FIREBASE_LOADED, LOGOUT_USER, LOAD_USER } from '../actions/constants.js';

export default function firebaseReducer(state = false, action) {
    switch (action.type) {
        case FIREBASE_LOADED:
        case LOAD_USER:
        case LOGOUT_USER:
            return true;
        default:
            return state;
    }
}