import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Public/Home';
import waitForDashboard from 'bundle-loader?lazy&name=dashboard!components/containers/Dashboard/Dashboard.component';
import waitForAdmin from 'bundle-loader?lazy&name=admin!components/containers/Admin';
import PrivateRoute from './commons/PrivateRoute';
import FirebaseTest from './containers/FirebaseTest';
// https://reacttraining.com/react-router/web/guides/code-splitting
import Bundle from './Bundle.js';

const Dashboard = (props) => (
    <Bundle load={waitForDashboard}>
        {(Dashboard) => <Dashboard {...props} />}
    </Bundle>
);

const Admin = (props) => (
    <Bundle load={waitForAdmin}>
        {(Admin) => <Admin {...props} />}
    </Bundle>
);

const NoMatch = ({ location }) => (
    <div>
        <h3>No match for <code>{location.pathname}</code></h3>
    </div>
);

class App extends Component {

    componentDidMount = () => {
        waitForDashboard(() => { });
        waitForAdmin(() => { });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/fire" component={FirebaseTest} />
                    <Route path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/admin" component={Admin} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

export default App;