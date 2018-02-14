import React, { Component } from 'react';
import FirebaseApi from 'components/FirebaseApi.js';
import { connect } from 'react-redux';
import { Observable, Subject } from 'rxjs';
import axios from 'axios';
import 'rxjs/add/observable/fromPromise';

import GeoFilter from 'components/GeoFilter';

// import styles from './Comp/styles.css';


class FirebaseTest extends Component {

    constructor(props) {
        super(props);

    }

    navPositionRequest$ = new Subject();
    currentPosition = { lat: -12.1139054, lng: -77.0467084 };
    map = undefined;


    logoutUser = () => {
        FirebaseApi.logoutUser();
    }

    loginUser = () => {
        FirebaseApi.logInUser('luis@test.com', '1234567');
    }

    addMarker = (item) => {
        new google.maps.Marker({ position: { lat: item.lat, lng: item.lng }, map: this.map });
    }

    componentDidMount = () => {
        this.navPositionRequest$.subscribe((newPosition) => {
            GeoFilter.getList(newPosition, 1).map(this.addMarker);
        });
        this.initMap();
        this.getCurrent();
    }

    getCurrent = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.currentPosition = [pos.coords].map((item) => ({ lat: item.latitude, lng: item.longitude }))[0];
            this.map.setCenter(this.currentPosition);
            this.navPositionRequest$.next(this.currentPosition);
        }, (err) => console.warn(`ERROR(${err.code}): ${err.message}`));
    }

    updateMapListFiltered = (newPosition) => {
        this.navPositionRequest$.next(newPosition);
    }

    initMap = () => {
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: this.currentPosition
        });

        google.maps.event.addListener(this.map, 'click', (event) => {
            const point = event.latLng.toJSON();
            this.updateMapListFiltered(point);
        });
    }

    render() {
        return (
            <div className="container" >
               
               <div className="row">
                   row
               </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(FirebaseTest);