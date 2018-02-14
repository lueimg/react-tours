import { LOAD_USER, LOGOUT_USER, LOAD_USER_PROFILE } from '../actions/constants.js';

const defaultValues = null;

export default function userReducer(state = defaultValues, action) {
    switch (action.type) {
        case LOAD_USER:
            return action.user;
        case LOGOUT_USER:
            return null;
        case LOAD_USER_PROFILE:
            return { ...state, profile: action.profile };
        default:
            return state;
    }
}
