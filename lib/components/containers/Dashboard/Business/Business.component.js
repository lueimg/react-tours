import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect,  } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { css } from 'styled-components';

import BusinessMenu from './components/BusinessMenu.component';
import BusinessSideBar from './components/SideBar';
import BusinessMap from './views/BusinessMap';
import BusinessInformation from './views/BusinessInformation';
import BusinessDetails from './views/BusinessDetails';


import { showSidebar, hideSidebar , showMap, hideMap, mapHelper } from 'components/actions';

const BusinessSections = styled.div`
    display: flex;
`;

const SidebarSection = styled.div`
    flex: 1;
    height: 70vh;
    overflow: scroll;
    background: #f1f1f1;

    ${ (props) => props.hide && css`
        display: none;
    `}
`;

const ContentSection = styled.div`
    flex: 2;
    height: 70vh;
`;



class Business extends Component {

    componentDidMount = () => {

        this.props.mapHelper.infowView$.subscribe((BusinessClicked) => {
            // Data from infoview google map
            console.warn('info view clicked', BusinessClicked);
            console.warn('business map pro', this.props);
            this.props.history.push('/dashboard/business/' + BusinessClicked.id);
            this.props.actions.hideMap();
        });

        const firstUrl = this.props.location.pathname;
        // console.log('business container', this.props)
        if (firstUrl === '/dashboard/business') {
            this.props.actions.showMap();
            this.props.actions.showSidebar();
        } else {
            this.props.actions.hideMap();
            this.props.actions.hideSidebar();
        }
    }


    render() {
        return (
            <div>
                <BusinessMenu />
                <BusinessSections className="BusinessSections">
                    <SidebarSection hide={this.props.hideSidebar} className="sidebar-section">
                        <BusinessSideBar />
                    </SidebarSection>
                    <ContentSection fullwidth={this.props.hideSidebar} className="ContentSection">
                        <BusinessMap />
                        <Route path="/dashboard/business/:id" render={(history) => {
                            return <BusinessInformation key={history.match.params.id} {...history} />;
                        }} />
                    </ContentSection>
                </BusinessSections>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessSelected: state.businessSelected,
        hideSidebar: !state.showSidebar,
        mapHelper: mapHelper,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({showSidebar, hideSidebar , showMap, hideMap}, dispatch)
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Business));
