import FirebaseApi from 'components/FirebaseApi.js';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { baseUrl } from 'config.js';

import {LOAD_CATEGORIES} from './constants.js';

const rootUrl = `${baseUrl}/business_categories`;

function formartObjectList(list) {
    return Object.keys(list).map((id) => formatObject(id, list[id]));
}

function formatObject(id, item) {
    return {
        name: item.name,
        id
    };
}

function formartObjectListFull(list) {
    return Object.keys(list).map((id) => formatObjectFull(id, list[id]));
}

function formatObjectFull(id, item) {
    return {
        ...item,
        id
    };
}


export const LoadCategoriesAction = (categories) => ({ type: LOAD_CATEGORIES, categories });

export const LoadCategoriesInRedux = (dispatch) => {
    LoadCategoriesListFull()
        .subscribe((categories) => dispatch(LoadCategoriesAction(categories)));
};


export const LoadCategoriesList = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(rootUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map(formartObjectList)
        // .do((data)=> console.log ('categories', data)) // debugging
        .catch(() => Observable.of([]));

};

export const LoadCategoriesListFull = () => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(rootUrl).once('value'))
        .map((snapshot) => snapshot.val())
        .map(formartObjectListFull)
        .catch(() => Observable.of([]));

};

export const createCategory = (item) => {
    const firebasePromise = FirebaseApi.db().ref().child(rootUrl).push().set({ ...item });
    return Observable.fromPromise(firebasePromise);
};

export const updateCategory = (item) => {
    const firebasePromise = FirebaseApi.db().ref(`${rootUrl}/${item.id}`).set({ ...item });
    return Observable.fromPromise(firebasePromise);
};

export const loadCategoryById = (id) => {
    return Observable
        .fromPromise(FirebaseApi.db().ref(`${rootUrl}/${id}`).once('value'))
        .map((snapshot) => snapshot.val())
        .map((item) => ({ ...item, id }));
};



