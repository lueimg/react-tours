import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapHelper, selectBusiness, showSidebar } from 'components/actions';
import styled, { css } from 'styled-components';

const MapStyled = styled.div`
    &#map {
        height: 70vh;
        
        ${(props) => props.hidden && css`
             height: auto;
        `}
    }  
`;


const BusinessMapWrapper = styled.div`
    ${(props) => props.hide && css`
        display: none;
    `}
`;



class BusinessMap extends Component {

    componentDidMount = () => {
        this.props.actions.showSidebar();
        if (this.props.currentPosition) {
            this.props.mapHelper.initializeMap(this.props.currentPosition);
        }
    }

    componentDidUpdate = () => {
        if (this.props.currentPosition.lat) {
            this.props.mapHelper.removeAllMarkers();
            if (this.props.currentPosition.lat) {
                this.props.mapHelper.setCenter(this.props.currentPosition);
            }
            this.props.businessNearby.map((item) => this.props.mapHelper.addMarker(item));
        }
    }
    render() {
        return (
            <BusinessMapWrapper className="BusinessMapWrapper" hide={!this.props.showMap}>
                <MapStyled
                    className="MapStyled"
                    hidden={this.props.isMapHidden}
                    id="map"
                />
            </BusinessMapWrapper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        showMap: state.showMap,
        businessNearby: state.businessNearby,
        currentPosition: state.currentPosition,
        mapHelper: mapHelper,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            selectBusiness: (item) => dispatch(selectBusiness(item)),
            showSidebar: () => dispatch(showSidebar())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessMap);
