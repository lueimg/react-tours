import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { GetRoutes } from './Dashboard.routes.js';
import TopBar from './shared/Topbar.component.js';
import MainMenu from './shared/MainMenu.component.js';
import Business from './Business/Business.component.js';
import BusinessInformation from './Business/views/BusinessInformation.js';
import Community from './Community';
import Events from './Events';

export default class Dashboard extends React.Component {

    render() {
        
        return (
            <div className='dashboard-wrapper'>
                <TopBar />
                <MainMenu />
                <Router>
                    <div className="dashboard-content">
                        <Switch>
                            <Route path={`${this.props.match.url}/business`}  component={Business} />
                            <Route path={`${this.props.match.url}/community`}  component={Community} />
                            <Route path={`${this.props.match.url}/events`}  component={Events} />
                            <Route exact path={`${this.props.match.url}`}  render={() => {
                                return <Redirect to="/dashboard/business" />;
                            }} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
