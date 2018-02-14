const defaultValues = [];

export default function businessNearby(state = defaultValues, action) {
    switch (action.type) {
        case 'SAVE_BUSINESS_NEARBY':
            return action.list;
        default:
            return state;
    }
}