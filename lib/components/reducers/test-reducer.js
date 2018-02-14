
const defaultState = '';

export default function (state = defaultState, action = {}) {
    switch (action.type) {
        case 'TEST_START':
            return 'tested';
        default:
            return state;
    }
}