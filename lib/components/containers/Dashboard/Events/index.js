import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import SideBar from './components/SideBar'
import EventsMap from './views/EventsMap'
import EventsInformation from './views/EventsInformation'
import EventsPlaces from './views/EventsPlaces'

class Events extends Component {
    render() {
        return (
            <Router>
                <div id="wrapper">
                    <SideBar />
                    <Switch>
                        <Route path="/dashboard/events/information" component={EventsInformation} />
                        <Route path="/dashboard/events/places" component={EventsPlaces} />
                        <Route path="/dashboard/events" component={EventsMap} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default Events;
