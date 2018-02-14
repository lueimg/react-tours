import React, { Component } from 'react';
import _ from 'lodash';
import BusinessTeaser from './BusinessTeaser';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter} from 'react-router-dom';

const BusinessListWrapper = styled.div`
`;

class BusinessSidebar extends Component {
    componentDidMount = () => {
      
    }
    
    render() {
        return (
            <BusinessListWrapper className="BusinessListWrapper">
                {_.sortBy(this.props.businessNearby, ['distance'])
                    .map((item, index) => <BusinessTeaser key={index} item={item} />)}
            </BusinessListWrapper>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        businessNearby: state.businessNearby
    };
};

export default withRouter(connect(mapStateToProps)(BusinessSidebar));
