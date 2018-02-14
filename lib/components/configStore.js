import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'components/reducers/index.js';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import FirebaseApi from 'components/FirebaseApi.js';
import { LogoutUser, loadUserProfile, LoadCategoriesInRedux, getCurrentPosition } from './actions';

const middleware = applyMiddleware(thunk, logger);

let store = createStore(rootReducer, middleware);

// Geolocalization
getCurrentPosition(store.dispatch);

//Firebase
FirebaseApi.onUserSignInOrLogout()
    .subscribe((user) => {
        if(user) {
            store.dispatch(loadUserProfile(user));
        } else {
            store.dispatch(LogoutUser());
        }

        LoadCategoriesInRedux(store.dispatch);

});



export default store;




