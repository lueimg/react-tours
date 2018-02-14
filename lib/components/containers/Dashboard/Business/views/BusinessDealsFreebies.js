import React, {Component} from 'react';
import BusinessDeals from './BusinessDeals'

class BusinessDealsFreebies extends Component {
  componentDidMount(){
    $('[data-toggle="popover"]').popover('show');
  }
  render(){
    return(
      <div>
        <BusinessDeals />
        <div className="contentwrap">
          <div className="navwrap">
            <div className="col-md-12 bus-inf-description">
              <div className="content">
      					<div className="col-md-2">
      						<ul className="list-coupons">
      							<li>
                      <a href="#"><img src="../../images/taco.png" alt=""/>Free Taco</a>
                    </li>
      							<li>
                      <a href="#"><img src="../../images/taco.png" alt=""/>Free Burger</a>
                    </li>
      						</ul>
      					</div>
      					<div className="col-md-8">
      						<img src="../../images/freebies-coupon.png" alt="" className="img-responsive center-block"/>
      						<a href="#" className="request"><div className="ico-request"></div>Request</a>
      					</div>
      					<div className="col-md-2">
      						<div className="ico-info-orange" data-toggle="popover" data-placement="top" title="More Information" data-content="Want to know about Deals?."></div>
      					</div>
      				</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessDealsFreebies;
