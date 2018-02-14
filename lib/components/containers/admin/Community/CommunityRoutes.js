import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './CommunityList.component.js';
import Form from './CommunityForm.component.js';

class Root extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/:id/edit`} component={Form} />
                <Route path={`${this.props.match.url}/add`} component={Form} />
                <Route path={`${this.props.match.url}`} component={List} />
            </Switch>
        );
    }
}

export default Root;