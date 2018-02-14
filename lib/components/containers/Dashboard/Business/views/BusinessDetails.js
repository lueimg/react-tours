import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { } from 'components/actions';

class BusinessDetails extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <img src="../../images/food_filter.png" alt="" />
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="business-title">
                                Tacos Marios
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                votos
                            </div>
                            <div className="col-sm-6">
                                open now
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default connect()(BusinessDetails);