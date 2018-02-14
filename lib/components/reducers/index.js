import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import firebaseReducer from './firebase-reducer';
import businessNearby from './businessNearby-reducer';
import { businessSelected } from './business-reducers';
import categories from './categories-reducer';
import {positionReducer, ShowMapReducer} from './map-reducer';
import sidebarState from './sidebar-reducers';

const rootReducer = combineReducers({
    user: userReducer,
    isFirebaseLoaded: firebaseReducer,
    currentPosition: positionReducer,
    businessNearby,
    categories,
    businessSelected,
    showSidebar: sidebarState,
    showMap: ShowMapReducer
});

export default rootReducer;
