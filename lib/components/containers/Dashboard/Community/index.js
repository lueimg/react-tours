import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import SideBar from './components/SideBar'
import CommunityMap from './views/CommunityMap'
import CommunityInformation from './views/CommunityInformation'
import CommunityNeighborhood from './views/CommunityNeighborhood'
import CommunityPlaces from './views/CommunityPlaces'
import CommunityEvents from './views/CommunityEvents'
import CommunityGroup from './views/CommunityGroup'

class Community extends Component {
    render() {
        return (
            <Router>
                <div id="wrapper">
                    <SideBar />
                    <Switch>
                        <Route path="/dashboard/community/information" component={CommunityInformation} />
                        <Route path="/dashboard/community/neighborhood" component={CommunityNeighborhood} />
                        <Route path="/dashboard/community/places" component={CommunityPlaces} />
                        <Route path="/dashboard/community/events" component={CommunityEvents} />
                        <Route path="/dashboard/community/group" component={CommunityGroup} />
                        <Route exact path="/dashboard/community" component={CommunityMap} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default Community;
