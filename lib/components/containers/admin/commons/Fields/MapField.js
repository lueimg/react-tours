//https://tomchentw.github.io/react-google-maps/places/search-box
// https://github.com/tomchentw/react-google-maps

import React, { Component, PureComponent } from 'react';

import {
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

import SearchBox from 'react-google-maps/lib/places/SearchBox';

const INPUT_STYLE = {
    boxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    border: '1px solid transparent',
    width: '240px',
    height: '32px',
    marginTop: '27px',
    padding: '0 12px',
    borderRadius: '1px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    fontSize: '14px',
    outline: 'none',
    textOverflow: 'ellipses',
};

const SearchBoxExampleGoogleMap = withGoogleMap((props) => (
    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Business Address"
            inputStyle={INPUT_STYLE}
        />
        {props.markers.map((marker, index) => (
            <Marker position={marker.position} key={index} />
        ))}
    </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SearchBoxExample extends PureComponent {

    state = {
        bounds: null,
        center: { lat: 47.6205588, lng: -122.3212725, },
        markers: [{ position: new google.maps.LatLng(47.6205588, -122.3212725), }]
    };

    componentDidMount = () => {
        if (this.props.defaultValues) {
            const center = {
                lat: this.props.defaultValues.lat,
                lng: this.props.defaultValues.lng,
            };
            const markers = [{ position: new google.maps.LatLng(center.lat, center.lng), }];

            this.setState({ center, markers }, () => {
                this._searchBox._inputElement.value = this.props.defaultValues.text;
            });

        }
    }

    // componentDidUpdate = (prevProps, prevState) => {
    //     console.log('cdu this._searchBox', this._searchBox);
    // }


    handleMapMounted = this.handleMapMounted.bind(this);
    handleBoundsChanged = this.handleBoundsChanged.bind(this);
    handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
    handlePlacesChanged = this.handlePlacesChanged.bind(this);

    handleMapMounted(map) {
        this._map = map;
    }

    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        const bounds = new google.maps.LatLngBounds();

        places.map((place) => {
            place.geometry.viewport ? bounds.union(place.geometry.viewport) : bounds.extend(place.geometry.location);
        });

        const markers = places.map((place) => ({ position: place.geometry.location, }));

        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({ center: mapCenter, markers, });

        this._map.fitBounds(bounds);

        this.props.onAddressUpdate({ metadata: bounds, places });
    }

    render() {
        return (
            <SearchBoxExampleGoogleMap
                containerElement={<div style={mapStyle} />}
                mapElement={<div style={mapStyle} />}
                center={this.state.center}
                onMapMounted={this.handleMapMounted}
                onBoundsChanged={this.handleBoundsChanged}
                onSearchBoxMounted={this.handleSearchBoxMounted}
                bounds={this.state.bounds}
                onPlacesChanged={this.handlePlacesChanged}
                markers={this.state.markers}
            />
        );
    }
}

const mapStyle = {
    height: '300px'
};