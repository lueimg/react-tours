import React, { Component } from 'react';
import FirebaseApi from 'components/FirebaseApi.js';

export default class Notification extends Component {

    logoutUser = (event) => {
        event.preventDefault();
        FirebaseApi.logoutUser();
    }

    render() {
        return (
            <div className="notification">
                <a href="#" onClick={this.logoutUser}>
                    <div className="ico-notification"></div>
                </a>
            </div>
        );
    }
}
