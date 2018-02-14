const defaultValues = null;

export function businessSelected(state = defaultValues, action) {
    switch (action.type) {
        case 'UPDATE_BUSINESS_SELECTED':
            return action.payload;
        default:
            return state;
    }
}