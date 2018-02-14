const defaultState = false;
import { TOGGLE_SIDEBAR, SHOW_SIDEBAR, HIDE_SIDEBAR } from 'components/actions';

export default function (state = defaultState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return !state;
        case SHOW_SIDEBAR:
            return true;
        case HIDE_SIDEBAR:
            return false;
        default:
            return state;
    }
}