import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './commons/Layout.js';
import CommunityRoutes from './Community/CommunityRoutes';
import BusinessRoutes from './Business/BusinessRoutes';
import PartnersRoutes from './Partners/PartnersRoutes';
import CategoriesRoutes from './Categories/CategoriesRoutes';
import DealsRoutes from './Deals/DealsRoutes';
import DealsTypeRoutes from './Deals_Type/DealsTypeRoutes';
import CouponModeRoutes from './Coupon_Mode/CouponModeRoutes';
import CouponsRoutes from './Coupons/CouponsRoutes';
import VisitsRoutes from './Visits/VisitsRoutes';

const Comp = () => <div>Home Admin Page </div>;

class Admin extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={`${this.props.match.url}/communities`} component={CommunityRoutes} />
                    <Route path={`${this.props.match.url}/business`} component={BusinessRoutes} />
                    <Route path={`${this.props.match.url}/partners`} component={PartnersRoutes} />
                    <Route path={`${this.props.match.url}/categories`} component={CategoriesRoutes} />
                    <Route path={`${this.props.match.url}/deals`} component={DealsRoutes} />
                    <Route path={`${this.props.match.url}/deal_type`} component={DealsTypeRoutes} />
                    <Route path={`${this.props.match.url}/coupon_used_modes`} component={CouponModeRoutes} />
                    <Route path={`${this.props.match.url}/coupons`} component={CouponsRoutes} />
                    <Route path={`${this.props.match.url}/visits`} component={VisitsRoutes} />
                    <Route exact path={`${this.props.match.url}`} component={Comp} />
                </Switch>
            </Layout>
        );
    }
}

export default Admin;
