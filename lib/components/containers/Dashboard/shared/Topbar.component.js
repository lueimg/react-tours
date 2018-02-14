import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox.component';
import UserBlock from './UserBlock.component';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const TopBarWrapper = styled.div`
    padding-top: 20px;
    background: #333333
`;

const TopBarWrapperContent = styled.div`
    display: flex;
    justify-content: space-between;
    background: #4B4B4B;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 13px;

    & > div {
        flex: 1;
        text-align: center;
        & img {
            
        }
    }
    & .search {
        flex: 2
    }

`;

class TopBar extends Component {
    static propTypes = {
    }

    goToHome = () => {
        this.props.history.push('/dashboard/business');
    }


    render() {
        return (
            <TopBarWrapper>
                <TopBarWrapperContent>
                    <div onClick={this.goToHome}>
                        <img src="/images/logo-dashboard.png" alt="" className="" />
                    </div>
                    <SearchBox />
                    <UserBlock />
                </TopBarWrapperContent>
            </TopBarWrapper>
        );
    }
}

export default withRouter(TopBar);