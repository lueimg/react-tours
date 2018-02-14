import FirebaseApi from 'components/FirebaseApi.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { baseUrl } from 'config.js';

export const UPDATE_BUSINESS_SELECTED = 'UPDATE_BUSINESS_SELECTED';
export const SAVE_BUSINESS_NEARBY = 'SAVE_BUSINESS_NEARBY';

// in dev is : /dev/business
const businessUrl = `${baseUrl}/business`;

export const UploadImage = (name, file) => {
    return FirebaseApi.uploadFileObservable(name, file);
};

export const createBusiness = (item) => {
    const firebasePromise = FirebaseApi.db().ref().child(businessUrl).push().set({...item });
    return Observable.fromPromise(firebasePromise);
};

export const UpdateBusiness = (item) => {
    const firebasePromise = FirebaseApi.db().ref(`${businessUrl}/${item.id}`).set({ ...item });
    return Observable.fromPromise(firebasePromise);
};

export const LoadBusinessList = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(businessUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map((list) => Object.keys(list).map((id) => ({ ...list[id], id })))
        // .do((data)=> console.log (data)) // debugging
        .catch(() => Observable.of([]));        
        
};

export const LoadBusinessItem = (id) => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(`${businessUrl}/${id}`).once('value'))
        .map((snapshot) => snapshot.val())
        .map((item) => ({ ...item, id: id }));
        
};

export const saveBusinessNearby  = (list) => {
    return {
        type: SAVE_BUSINESS_NEARBY,
        list
    };
};

export const selectBusiness  = (item) => {
    return {
        type: UPDATE_BUSINESS_SELECTED,
        payload: item
    };
};