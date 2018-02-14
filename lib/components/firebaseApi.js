import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { baseUrl } from 'config.js';

class FirebaseApi {

    constructor() {
        firebase.initializeApp(this.config);
    }

    config = {
        apiKey: 'AIzaSyAKbWPHretKVWi2AbD-uITJHFcxnJ4vqNw',
        authDomain: 'detour-maps.firebaseapp.com',
        databaseURL: 'https://detour-maps.firebaseio.com',
        projectId: 'detour-maps',
        storageBucket: 'detour-maps.appspot.com',
        messagingSenderId: '174346331906'
    };

    currentUser() {
        return firebase.auth().currentUser;
    }

    provide() {
        let provider = new firebase.auth.FacebookAuthProvider();

        return provider;
    }

    fbLogin() {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithPopup(this.provide()).then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                resolve(user);
                // ...
            }).catch((error) => { reject(error); });
        });
    }

    createUser(email, pass) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, pass)
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                // console.log('createUser ERROR', error);

            });
    }

    logInUser(email, password) {
        return new Promise((resolve, reject) => {
            firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(resolve, reject)
                .catch(function (error) {
                    reject(error);
                    alert('Login Error', error.message);
                });
        });

    }

    onUserStateChange(onSuccess, onReject) {
        firebase.auth()
            .onAuthStateChanged(function (user) {
                if (user) {
                    // console.log('user', user);
                    if (onSuccess) {
                        onSuccess(user);
                    }
                } else {
                    // console.log('user log out');
                    if (onReject) {
                        onReject({ user: undefined });
                    }
                }
            });
    }

    onUserSignInOrLogout() {
        return Observable.create((observer) => {
            firebase.auth().onAuthStateChanged((user) => { observer.next(user);  });
        });
    }

    logoutUser() {
        return firebase.auth().signOut();
    }

    db() {
        // https://firebase.google.com/docs/database/web/read-and-write
        return firebase.database();
    }

    storage() {
        // https://firebase.google.com/docs/database/web/read-and-write
        return firebase.storage();
    }

    uploadFile(name, file) {
        return new Promise((resolve, reject) => {
            let uploadTask = firebase.storage().ref().child(name).put(file);

            uploadTask.on('state_changed', (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                let progressMessage = 'Upload is ' + progress + '% done';
                // resolve(progressMessage)/
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        break;
                }
            }, (error) => {
                // Handle unsuccessful uploads
                reject(error);
            }, () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                var downloadURL = uploadTask.snapshot.downloadURL;
                resolve(downloadURL);
            });
        });
    }

    uploadFileObservable (name, file) {
        return Observable.create((observer) => {
            let uploadTask = firebase.storage().ref().child(name).put(file);
            uploadTask.on('state_changed', (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                observer.next({ action: 'running', progress });
            }, observer.error, () => {
                observer.next({ action: 'done', url: uploadTask.snapshot.downloadURL });
                observer.complete();
            });
        });
    }



    getUserProfile() {
        const currentUser = this.currentUser();
        return new Promise((resolve, reject) => {

            if (!currentUser.uid) {
                reject({
                    error: 'No Uid',
                    message: 'thers is no user authenticated'
                });
            }

            this.db()
                .ref(`${baseUrl}/users/${currentUser.uid}`)
                .once('value')
                .then((snapshot) => {
                    const currentVal = snapshot.val();
                    resolve(currentVal);
                }, (err) => {
                    console.log(err);
                    if (reject) reject(err);
                });
        });

    }

}

export default new FirebaseApi();