import { FIREBASE_LOADED } from './constants.js';

export function firebaseLoaded() {
    return {
        type: FIREBASE_LOADED
    };
}