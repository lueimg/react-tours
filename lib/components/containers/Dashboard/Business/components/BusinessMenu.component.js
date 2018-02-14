import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import GeoFilter from 'components/GeoFilter';

import { addMarkerIcon, saveBusinessNearby, selectBusiness, showSidebar, updateBusinessNearBy, showMap, mapHelper } from 'components/actions';

const MenuWrapper = styled.div`
    display: flex;
    margin: 20px 100px;
`;

const MenuItemWrapper = styled.div`
    cursor: pointer;
    background: #fff;
    display: inline-block;
    padding: 10px 30px;
    margin: 0 10px;
    border-radius: 5px;
    color: #ccc;
    border: 1px solid #ccc;
    text-transform: uppercase;

    &:hover {
        background: #f2803c;
        color: #fff;
        border: 1px solid #f2803c;
    }

    ${(props) => props.active && css`
        background: #f2803c;
        color: #fff;
        border: 1px solid #f2803c;
    `}
`;

const MenuItem = (props) => (
    <MenuItemWrapper onClick={() => props.updateWithCategory(props.name)} className="MenuItem">{props.name}</MenuItemWrapper>
);


class BusinessMenu extends Component {

    updateWithCategory = (categoryName) => {
        const isDashboardListPage = this.props.history.location.pathname === '/dashboard/business';
        
        if (!isDashboardListPage) {
            this.props.history.push('/dashboard/business');
            this.props.actions.showSidebar();
            this.props.actions.showMap();
            this.props.actions.cleanBusinessSelected();
            this.props.mapHelper.setCenter(this.props.currentPosition);
        }

        this.props.actions.updateBusinessNearBy(this.props.currentPosition, categoryName);
    }

    render() {
        return (
            <MenuWrapper className="MenuWrapper">
                {this.props.categories.map((item, index) =>
                    (<MenuItem
                        key={index}
                        {...item}
                        updateWithCategory={this.updateWithCategory}
                    />))}
            </MenuWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories || [],
        businessNearby: state.businessNearby,
        currentPosition: state.currentPosition,
        showMap: state.showMap,
        mapHelper
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            GeoFilter,
            addMarkerIcon,
            saveBusinessNearby: (list) => dispatch(saveBusinessNearby(list)),
            cleanBusinessSelected: () => dispatch(selectBusiness(null)),
            showSidebar: () => dispatch(showSidebar()),
            showMap: () => dispatch(showMap()),
            updateBusinessNearBy: (currentPosition, categoryName) => updateBusinessNearBy(dispatch, currentPosition, categoryName),

        }
    };
};

BusinessMenu.defaultProps = {
    categories: []
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessMenu));