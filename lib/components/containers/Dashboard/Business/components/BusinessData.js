import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LoadBusinessItem, toggleSidebar } from 'components/actions';
import styled from 'styled-components';

const SectionTittle = styled.div`
border-bottom: 3px solid #ccc;
padding-bottom: 20px;
`;

const SectionData = styled.div`

`;

const VoutesCounter = styled.div`
color: #ccc;
padding-top: 3px;
`;





class BusinessData extends Component {

    componentDidMount = () => {

    }

    goToFullPage = () => {
        this.props.actions.toggleSidebar();
    }


    render() {
        return (
            <div className="contentwrap">
                <div className="navwrap">
                    <SectionTittle className="col-md-12 bus-inf-titles SectionTittle">
                        <div className="col-md-7 col-xs-12">
                            <div className="pull-left">
                                <img src="../../images/food_filter.png" alt="" />

                            </div>
                            <div className="pull-left titles col-md-8">
                                <h2>{this.props.business.name}</h2>
                                <div className="pull-left rating">4.5</div>
                                <div className="pull-left rating-star">
                                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>

                                </div>
                                <VoutesCounter className="VoutesCounter text-center">(208 votes)</VoutesCounter>

                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12 schedules">
                            <div className="pull-right">
                                <div className="ico-hours"></div>
                                <a href="#" className="pull-left" data-jq-dropdown="#jq-dropdown-2">
                                    <div>Open Now!</div>
                                    <div>Open Hours <span className="glyphicon glyphicon-menu-down"></span></div>
                                </a>

                                <a onClick={this.goToFullPage} href="#menu-toggle-expand" id="menu-toggle-expand" className="pull-left resize transition" data-toggle="tooltip" data-placement="bottom" data-trigger="hover" title="Expand">
                                    <span className="glyphicon glyphicon-resize-full"></span>
                                </a>


                            </div>
                        </div>
                    </SectionTittle>
                    <div className="clearfix"></div>

                    <SectionData className="bus-inf-data">
                        <div className="col-md-4">
                            <div className="ico-fono"></div>
                            <p className="pull-left">044 - 2384 - 234354</p>
                        </div>
                        <div className="col-md-4">
                            <div className="ico-world"></div>
                            <p className="pull-left"><a href="#" target="_blank">http://www.baccipizzeria.com.pe</a></p>
                        </div>
                        <div className="col-md-4">
                            <div className="ico-distance"></div>
                            <p className="pull-left">Via Giuseppe Garibaldi, 1797,<br />30122 Venezia</p>
                        </div>
                    </SectionData>

                </div>

                {/*Dropdown Horario*/}
                <div id="jq-dropdown-2" className="jq-dropdown jq-dropdown-tip2">
                    <ul className="jq-dropdown-menu2">
                        <li className="text-center">Opening Hours</li>
                        <li className="jq-dropdown-divider"></li>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Monday</td>
                                    <td>9am - 5pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>9am - 5pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>9am - 5pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>9am - 5pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>9am - 5pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </ul>
                </div>
                {/*FIN Dropdown Horario*/}
            </div>
        );
    }
}

BusinessData.defaultProps = {
    business: {}
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            toggleSidebar: () => dispatch(toggleSidebar()),
        }
    };
};

export default connect(null, mapDispatchToProps)(BusinessData);
