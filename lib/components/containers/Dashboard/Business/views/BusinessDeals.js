import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from '../components/NavBar'
import BusinessData from '../components/BusinessData'
import NavBarDeals from '../components/NavBarDeals'

class BusinessDeals extends Component {
  render(){
    return(
      <div className="dashboard">
        <NavBar />
        <BusinessData />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
              <h3 className="subtitle">Select Deals</h3>
              <NavBarDeals />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessDeals;
