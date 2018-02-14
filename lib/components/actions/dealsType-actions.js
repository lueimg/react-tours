import FirebaseApi from 'components/FirebaseApi.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { baseUrl } from 'config.js';

const rootUrl = `${baseUrl}/deal_type`;

function formartObjectList(list) {
    return Object.keys(list).map((id) => formatObject(id, list[id]));
}

function formatObject (id, item) {
    return {
        name: item.name,
        active: item.active,
        id
    };
}

export const loadDealsTypeList = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(rootUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map(formartObjectList)
        // .do((data)=> console.log ('categories', data)) // debugging
        .catch(() => Observable.of([]));

};

// only active partners
export const loadDealsTypeForSelect = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(rootUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map(formartObjectList)
        .map((list) => list.filter((item) => item.active === true))
        .catch(() => Observable.of([]));

};


export const loadDealsTypeById = (id) => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(`${rootUrl}/${id}`).once('value'))
        .map((snapshot) => snapshot.val())
        .map((item) => ({ ...item, id }));
};


export const addDealsType = (item) => {
    const firebasePromise = FirebaseApi.db().ref().child(rootUrl).push().set({...item });
    return Observable.fromPromise(firebasePromise);
};

export const updateDealsType = (item) => {
    const firebasePromise = FirebaseApi.db().ref(`${rootUrl}/${item.id}`).set({ ...item });
    return Observable.fromPromise(firebasePromise);
};
