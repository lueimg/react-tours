import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import UserData from './UserData';
import Notification from './Notification';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }

    render() {
        return (
            <div className="mainwrap">
                <div className="navwrap">
                    <div className="container">
                        <div className="row">
                            <nav>
                                <div className="brand-img">
                                    <Link to="/dashboard/">
                                        <img src="images/logo-dashboard.png" alt="" className="img-responsive" />
                                    </Link>
                                </div>
                                <ul className="icon-bar">
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Home">
                                        <Link to="/dashboard/">
                                            <div className="ico-home"></div>
                                        </Link>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Community">
                                        <Link to="/dashboard/community">
                                            <div className="ico-community"></div>
                                        </Link>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Business">
                                        <Link to="/dashboard/business">
                                            <div className="ico-business"></div>
                                        </Link>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Events">
                                        <Link to="/dashboard/events">
                                            <div className="ico-events"></div>
                                        </Link>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Deals">
                                        <a href="dashboard-deals.html">
                                            <div className="ico-deals"></div>
                                        </a>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Alerts">
                                        <a href="dashboard-alerts.html">
                                            <div className="ico-alerts"></div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="nav-data-user">
                                    <UserData />
                                    <Notification />
                                </div>
                            </nav>
                        </div>
                    </div>
                    <SearchBar />
                </div>
            </div>
        );
    }
}
