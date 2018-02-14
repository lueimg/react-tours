import FirebaseApi from 'components/FirebaseApi.js';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { baseUrl } from 'config.js';

const rootUrl = `${baseUrl}/deals`;

// export const UploadImage = (name, file) => {
//     return FirebaseApi.uploadFile(name, file);
// };

export const createDeals = (item) => {
    const firebasePromise = FirebaseApi.db().ref().child(rootUrl).push().set({...item });
    return Observable.fromPromise(firebasePromise);
};

export const updateDeals = (item) => {
    const firebasePromise = FirebaseApi.db().ref(`${rootUrl}/${item.id}`).set({ ...item });
    return Observable.fromPromise(firebasePromise);
};

export const loadDealsList = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(rootUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map((list) => Object.keys(list).map((id) => ({ ...list[id], id: id })))
        .catch(() => Observable.of([]));
};

export const loadDealsItem = (id) => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(`${rootUrl}/${id}`).once('value'))
        .map((snapshot) => snapshot.val())
        .map((item) => ({ ...item, id }))
        .do(data => console.log('comm item ', id, data))
};
