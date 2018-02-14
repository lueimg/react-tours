import { LOAD_CURRENT_POSITION, SHOW_MAP, HIDE_MAP, TOGGLE_MAP } from '../actions/';

const defaultValues = {};

export function ShowMapReducer(state = false, action) {
    switch (action.type) {
        case SHOW_MAP:
            return true;
        case HIDE_MAP:
            return false;
        case TOGGLE_MAP:
            return !state;
        default:
            return state;
    }
}

export  function positionReducer(state = defaultValues, action) {
    switch (action.type) {
        case LOAD_CURRENT_POSITION:
            return { ...action.position };
        default:
            return state;
    }
}
