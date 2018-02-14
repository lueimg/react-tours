import { LOAD_CATEGORIES } from '../actions/constants.js';

const defaultValues = [];

export default function userReducer(state = defaultValues, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
}
