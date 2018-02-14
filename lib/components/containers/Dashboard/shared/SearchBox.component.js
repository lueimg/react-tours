import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapHelper, saveBusinessNearby } from 'components/actions';
import GeoFilter from 'components/GeoFilter';
import styled from 'styled-components';
import { withRouter, Link, Redirect } from 'react-router-dom';

import { selectBusiness, showSidebar, showMap, updateBusinessNearBy } from 'components/actions';

const SearchInput = styled.input`
    width: 75%;
    padding: 8px;
    border-radius: 5px;
    border-width: 0;
`;

class SearchBox extends Component {

    state = {
        searchText: ''
    }

    updateSearch = (event) => {
        this.setState({ searchText: event.target.value });
    }

    goToBusinessList = () => {
        const searchPageRoot = '/dashboard/business';
        
        if (this.props.location.pathname !== searchPageRoot) {
            this.props.history.push(searchPageRoot);
            this.props.actions.showSidebar();
            this.props.actions.showMap();
        }
    }


    updateBusinessList = (event) => {
        if (event.key === 'Enter') {

            this.goToBusinessList();

            this.props.actions.cleanBusinessSelected();
            this.props.mapHelper.removeAllMarkers();
            this.props.actions.updateBusinessNearBy(this.props.currentPosition, this.state.searchText);
            // const businessList = this.props.geoFilter
            //     .getList(this.props.currentPosition, this.state.searchText ? 10 : 5)
            //     .filter((item) => item.name.toLowerCase().indexOf(this.state.searchText) > -1)
            //     .map((item) => this.addMarkerIcon(item))
            //     .map((item) => this.props.mapHelper.addMarker(item));


            // this.props.actions.saveBusinessNearby(businessList);

            // if (businessList.length) {
            //     this.props.mapHelper.setCenter({ lat: businessList[0].lat, lng: businessList[0].lng });
            // }
        }
    }

    addMarkerIcon = (item) => {
        const categories = this.props.categories;
        return {
            ...item,
            icon: categories[Math.floor(Math.random() * categories.length)].icon,
        };
    }


    render() {
        return (
            <div className="search">
                <div>
                    <SearchInput
                        className="search-input"
                        type="text"
                        placeholder="Search Business"
                        onChange={this.updateSearch}
                        onKeyPress={this.updateBusinessList}
                    />
                    <input type="hidden" />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log('mapstatetoprops searchbar', state.map);
    return {
        currentPosition: state.currentPosition,
        categories: state.categories,
        mapHelper: mapHelper,
        geoFilter: GeoFilter,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            saveBusinessNearby: (list) => dispatch(saveBusinessNearby(list)),
            cleanBusinessSelected: () => dispatch(selectBusiness(null)),
            showSidebar: () => dispatch(showSidebar()),
            showMap: () => dispatch(showMap()),
            updateBusinessNearBy: (position, searchText) => updateBusinessNearBy(dispatch, position, undefined, searchText),
        }
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBox)); 