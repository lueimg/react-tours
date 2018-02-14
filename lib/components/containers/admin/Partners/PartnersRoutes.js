import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Partners from './Partners.components.js';
import PartnersForm from './Form/PartnerForm.component.js';

class PartnersRoot extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/:id/edit`} component={PartnersForm} />
                <Route path={`${this.props.match.url}/add`} component={PartnersForm} />
                <Route path={`${this.props.match.url}`} component={Partners} />
            </Switch>
        );
    }
}

export default PartnersRoot;