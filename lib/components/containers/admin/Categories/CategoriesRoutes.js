import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CategoriesList from './CategoriesList.component.js';
import Form from './CategoriesForm.component.js';

class CategoriesRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/:id/edit`} component={Form} />
                <Route path={`${this.props.match.url}/add`} component={Form} />
                <Route path={`${this.props.match.url}`} component={CategoriesList} />
            </Switch>
        );
    }
}

export default CategoriesRoutes;